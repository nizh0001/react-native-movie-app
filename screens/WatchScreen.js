import { Text, Button, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { StorageContext } from "../context/StorageContext";
import { useNavigation } from "@react-navigation/native";

export default function WatchScreen() {
  const route = useRoute();
  const { id } = route.params;
  const { savedMovies, deleteMovieFromStorage } = useContext(StorageContext);
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
  }

  return (
    <>
      <Text>Now watching {movieToWatch.title}</Text>
      <Button
        title="Mark as watched"
        onPress={() => handleMarkingAsWatched(movieToWatch.id)}
      />
    </>
  );
}
