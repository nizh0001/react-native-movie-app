import { FlatList, View, Button } from "react-native";
import { useStorage } from "../context/StorageContext";
import { useLayoutEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function RentedScreen() {
  const { savedMovies } = useStorage();

  const nav = useNavigation();

  function handleWatchMovie(routeName, id) {
    nav.navigate(routeName, { id: id });
  }

  useLayoutEffect(() => {
    nav.setOptions({
      headerBackTitle: "Search",
    });
  }, [nav]);

  return (
    <View>
      <FlatList
        data={savedMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            icon={
              <Icon
                name="videocam"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
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
