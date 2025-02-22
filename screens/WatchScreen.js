import { Text, Button, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useStorage } from "../context/StorageContext";
import { useNavigation } from "@react-navigation/native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useRef, useEffect } from "react";

const videoSrc =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function WatchScreen() {
  const route = useRoute();
  const { id } = route.params;
  const { savedMovies, deleteMovieFromStorage } = useStorage();
  const movieToWatch = savedMovies.find((item) => item.id == id);
  const nav = useNavigation();

  if (!movieToWatch) {
    return (
      <View>
        <Text>Movie not found or already removed.</Text>
      </View>
    );
  }

  function handleMarkingAsWatched(id) {
    deleteMovieFromStorage(id);
    nav.navigate("Rented");
    nav.reset({
      index: 1,
      routes: [{ name: "Search" }, { name: "Rented" }],
    });
  }

  const player = useVideoPlayer(videoSrc, (player) => {
    player.loop = false;
  });

  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Text style={{ marginBottom: 10 }}>
        Now watching {movieToWatch.title}
      </Text>

      <VideoView
        style={{ width: 300, height: 200 }}
        allowsFullscreen
        player={player}
      />

      <Button
        title="Mark as watched"
        onPress={() => handleMarkingAsWatched(movieToWatch.id)}
      />
    </View>
  );
}
