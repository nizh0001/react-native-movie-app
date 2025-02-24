import { Text, View, StyleSheet } from "react-native";
import { useSearch } from "../context/SearchContext";
import { useStorage } from "../context/StorageContext";
import { Dialog } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import { styles } from "../theme/theme";

export default function RentModal({ visible, onClose, id }) {
  const { removeMovieFromSearchList, moviesData } = useSearch();
  const { saveMovieToStorage } = useStorage();
  const { theme } = useTheme();

  function handleRentMovie() {
    const rentedMovie = moviesData.find((item) => item.id == id);

    if (!rentedMovie) {
      console.error("Movie not found");
      return;
    }

    saveMovieToStorage(rentedMovie);
    removeMovieFromSearchList(id);
    onClose();
  }

  return (
    <Dialog isVisible={visible} onBackdropPress={onClose}>
      <Dialog.Title title="Rent Movie" />
      <Text style={styles.textDialog}>Rental Price: $10</Text>
      <Text style={styles.textDialog}>Would you like to rent this movie?</Text>
      <View style={styles.buttonContainerDialog}>
        <Dialog.Button
          title="Cancel"
          titleStyle={{ color: theme.colors.secondary }}
          onPress={onClose}
        />
        <Dialog.Button title="Confirm" onPress={handleRentMovie} />
      </View>
    </Dialog>
  );
}
