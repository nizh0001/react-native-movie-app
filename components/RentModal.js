import { Modal, TextInput, Button, Text, View, StyleSheet } from "react-native";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function RentModal({ visible, onClose, id }) {
  const { removeMovieFromSearchList } = useContext(SearchContext);

  function handleRentMovie() {
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
