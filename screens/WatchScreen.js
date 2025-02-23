import { Text, Button, View, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useStorage } from "../context/StorageContext";
import { useNavigation } from "@react-navigation/native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useRef, useEffect, useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useEvent } from "expo";

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchScreen() {
  const route = useRoute();
  const { id } = route.params;
  const { savedMovies, deleteMovieFromStorage } = useStorage();
  const orientation = useDeviceOrientation();
  const [orient, setOrient] = useState("portrait");

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

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      {!isPlaying && (
        <Text style={{ marginBottom: 10 }}>
          Now watching {movieToWatch.title}
        </Text>
      )}

      <VideoView
        ref={vidView}
        style={{ width: 300, height: 200 }}
        allowsFullscreen
        player={player}
      />

      {!isPlaying && (
        <Button
          title="Mark as watched"
          onPress={() => handleMarkingAsWatched(movieToWatch.id)}
        />
      )}
    </View>
  );
}
