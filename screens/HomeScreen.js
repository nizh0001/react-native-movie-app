import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Icon, useTheme } from "@rneui/themed";
import { styles } from "../theme/theme";
import SearchModal from "../components/SearchModal";
import MovieCard from "../components/MovieCard";
import RentModal from "../components/RentModal";
import Fab from "../components/Fab";

export default function HomeScreen() {
  const [visibleSearchModal, setVisibleSearchModal] = useState(false);
  const [visibleRentModal, setVisibleRentModal] = useState(false);
  const { moviesData, loading, notFound } = useSearch();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { theme } = useTheme();

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
      headerTitle: () => <Text style={styles.homeTitle}>Home</Text>,
      headerRight: () => {
        return (
          <Button
            type="clear"
            titleStyle={styles.buttonOkStyle}
            title="Rented"
            onPress={() => nav.navigate("Rented")}
          />
        );
      },
    });
  }, [nav]);

  return (
    <View style={styles.screenContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : notFound ? (
        <Text style={styles.welcomeText}>No movies found for your search.</Text>
      ) : moviesData.length > 0 ? (
        <>
          <Text style={styles.topText}>
            You have{" "}
            <Text style={styles.boldTopText}>{moviesData.length} </Text>
            movie{moviesData.length !== 1 ? "s" : ""} available to rent
          </Text>
          <FlatList
            data={moviesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
                icon={<Icon name="movie" />}
                image={item.poster_path}
                title={item.title}
                releaseDate={item.release_date}
                buttonTitle="Rent"
                onCardButtonPress={() => handleRentMovie(item.id)}
              />
            )}
          />
        </>
      ) : (
        <Text style={styles.welcomeText}>
          Hello! Looking for a movie? Tap the search button
        </Text>
      )}
      <RentModal
        visible={visibleRentModal}
        onClose={() => setVisibleRentModal(false)}
        id={selectedMovieId}
      />
      <Fab onPress={handleSearchModal} />
      <SearchModal
        visible={visibleSearchModal}
        onClose={() => setVisibleSearchModal(false)}
      />
    </View>
  );
}
