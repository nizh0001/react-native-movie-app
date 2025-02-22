import { FlatList, View, Button } from "react-native";
import { useStorage } from "../context/StorageContext";
import { useContext, useLayoutEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";

export default function RentedScreen() {
  const { savedMovies } = useStorage();

  const nav = useNavigation();

  function handleWatchMovie(routeName, id) {
    nav.navigate(routeName, { id: id });
  }

  useLayoutEffect(() => {
    nav.setOptions({
      headerBackTitle: "Search", // Shows "Search" next to the back arrow
    });
  }, [nav]);

  return (
    <View>
      <FlatList
        data={savedMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            image={item.poster_path}
            title={item.title}
            releaseDate={item.release_date}
            buttonTitle="Watch"
            onCardButtonPress={() => handleWatchMovie("Watch", item.id)}
          />
        )}
      />
    </View>
  );
}
