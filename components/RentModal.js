import { Modal, Button, Text, View, StyleSheet } from "react-native";
import { SearchContext } from "../context/SearchContext";
import { StorageContext } from "../context/StorageContext";
import { useContext } from "react";

export default function RentModal({ visible, onClose, id }) {
  const { removeMovieFromSearchList, moviesData } = useContext(SearchContext);
  const { saveMovieToStorage } = useContext(StorageContext);

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
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Rent movie for 10 $</Text>
          <View style={styles.buttonContainer}>
            <Button title="Close" color="red" onPress={onClose} />
            <Button title="Rent" onPress={handleRentMovie} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Dark background for modal effect
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
