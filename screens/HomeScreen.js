import { Text, Button, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useContext } from "react";
import SearchModal from "../components/SearchModal";
import Fab from "../components/Fab";
import { SearchContext } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);
  const { moviesData } = useContext(SearchContext);

  function handleSearchModal() {
    console.log("Opening Modal...");
    setVisible(true);
  }

  function handleRentMovie() {
    console.log("pressed");
  }

  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return <Button title="Rented" onPress={() => nav.navigate("Rented")} />;
      },
    });
  }, [nav]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Home/Search screen</Text>
      {moviesData ? (
        <FlatList
          data={moviesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => (
            <MovieCard
              image={`https://image.tmdb.org/t/p/w300${item.item.poster_path}`}
              title={item.item.title}
              releaseDate={item.item.release_date}
              buttonTitle="Rent"
              onCardButtonPress={handleRentMovie}
            />
          )}
        />
      ) : (
        <Text> No movies yet</Text>
      )}

      <Fab onPress={handleSearchModal} title="Search" />
      <SearchModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}
