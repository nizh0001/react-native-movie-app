import { FlatList, View, Text } from "react-native";
import { useStorage } from "../context/StorageContext";
import { useLayoutEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { Icon, useTheme } from "@rneui/themed";
import { styles } from "../theme/theme";

export default function RentedScreen() {
  const { savedMovies } = useStorage();
  const { theme } = useTheme();

  const nav = useNavigation();

  function handleWatchMovie(routeName, id) {
    nav.navigate(routeName, { id: id });
  }

  useLayoutEffect(() => {
    nav.setOptions({
      headerBackTitle: "Search",
      headerTintColor: theme.colors.primary,
      headerTitleStyle: {
        fontFamily: "fontBold",
        fontSize: 18,
      },
    });
  }, [nav]);

  return (
    <View style={styles.screenContainer}>
      {savedMovies.length > 0 ? (
        <>
          <Text style={styles.topText}>
            You have
            <Text style={styles.boldTopText}> {savedMovies.length} </Text>
            movie{savedMovies.length !== 1 ? "s" : ""} available to watch
          </Text>
          <FlatList
            data={savedMovies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MovieCard
                icon={<Icon name="videocam" />}
                image={item.poster_path}
                title={item.title}
                releaseDate={item.release_date}
                buttonTitle="Watch"
                onCardButtonPress={() => handleWatchMovie("Watch", item.id)}
              />
            )}
          />
        </>
      ) : (
        <Text style={styles.welcomeText}>
          You don't have any rented movies to watch. Go back to search.
        </Text>
      )}
    </View>
  );
}
