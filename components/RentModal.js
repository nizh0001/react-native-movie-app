import { Button, Text, View, StyleSheet } from "react-native";
import { useSearch } from "../context/SearchContext";
import { useStorage } from "../context/StorageContext";
import { Dialog } from "@rneui/themed";

export default function RentModal({ visible, onClose, id }) {
  const { removeMovieFromSearchList, moviesData } = useSearch();
  const { saveMovieToStorage } = useStorage();

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
      <Text style={styles.text}>Rent this movie for $10?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" color="red" onPress={onClose} />
        <Button title="Rent" onPress={handleRentMovie} />
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
