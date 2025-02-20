import { Text, Button, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useContext } from "react";
import SearchModal from "../components/SearchModal";
import Fab from "../components/Fab";
import { SearchContext } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import RentModal from "../components/RentModal";

export default function HomeScreen() {
  const [visibleSearchModal, setVisibleSearchModal] = useState(false);
  const [visibleRentModal, setVisibleRentModal] = useState(false);
  const { moviesData } = useContext(SearchContext);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  function handleSearchModal() {
    setVisibleSearchModal(true);
  }

  function handleRentMovie(id) {
    setVisibleRentModal(true);
    setSelectedMovieId(id);
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
              onCardButtonPress={() => handleRentMovie(item.item.id)}
            />
          )}
        />
      ) : (
        <Text> No movies yet</Text>
      )}

      <RentModal
        visible={visibleRentModal}
        onClose={() => setVisibleRentModal(false)}
        id={selectedMovieId}
      />

      <Fab onPress={handleSearchModal} title="Search" />
      <SearchModal
        visible={visibleSearchModal}
        onClose={() => setVisibleSearchModal(false)}
      />
    </View>
  );
}
