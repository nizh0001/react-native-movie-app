import { FlatList, View } from "react-native";
import { StorageContext } from "../context/StorageContext";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";

export default function RentedScreen() {
  const { savedMovies } = useContext(StorageContext);

  const nav = useNavigation();
  function handleWatchMovie(routeName, id) {
    nav.navigate(routeName, { id: id });
  }

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
