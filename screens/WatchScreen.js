import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useStorage } from "../context/StorageContext";
import { useNavigation } from "@react-navigation/native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useEvent } from "expo";
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { styles } from "../theme/theme";
import { useTheme } from "@rneui/themed";

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchScreen() {
  const route = useRoute();
  const { id } = route.params;
  const { savedMovies, deleteMovieFromStorage } = useStorage();
  const orientation = useDeviceOrientation();
  const [orient, setOrient] = useState("portrait");
  const { theme } = useTheme();

  const movieToWatch = savedMovies.find((item) => item.id == id);

  const vidView = useRef(null);
  const nav = useNavigation();
  const player = useVideoPlayer(videoSrc, (player) => {
    player.loop = false;
  });
  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  if (!movieToWatch) {
    return (
      <View>
        <Text>Movie not found or already removed.</Text>
      </View>
    );
  }

  useEffect(() => {
    setOrient(orientation);
    if (orientation === "landscape") {
      vidView.current.enterFullscreen();
    }
  }, [orientation]);

  function handleMarkingAsWatched(id) {
    deleteMovieFromStorage(id);
    nav.navigate("Rented");
    nav.reset({
      index: 1,
      routes: [{ name: "Search" }, { name: "Rented" }],
    });
  }

  useLayoutEffect(() => {
    nav.setOptions({
      headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: "fontBold",
        fontSize: 18,
      },
    });
  }, [nav]);

  return (
    <View style={styles.watchScreenContainer}>
      {!isPlaying && (
        <Text style={styles.nameTopText}>
          Now watching:{" "}
          <Text style={styles.nameBoldTopText}>"{movieToWatch.title}"</Text>
        </Text>
      )}

      <View style={styles.videoContainer}>
        <VideoView
          ref={vidView}
          style={styles.video}
          allowsFullscreen
          player={player}
        />
      </View>

      {!isPlaying && (
        <Button
          title="Mark as watched"
          onPress={() => handleMarkingAsWatched(movieToWatch.id)}
          icon={<Icon name="done" />}
        />
      )}
    </View>
  );
}
