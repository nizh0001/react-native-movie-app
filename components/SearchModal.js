import { TextInput, Button, View, StyleSheet } from "react-native";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Dialog } from "@rneui/themed";

export default function SearchModal({ visible, onClose }) {
  const { fetchMovies } = useSearch();
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (query.trim()) {
      fetchMovies(query);
    }
    onClose();
  }

  return (
    <Dialog isVisible={visible} onBackdropPress={onClose}>
      <Dialog.Title title="Search Movies" />
      <TextInput
        onChangeText={setQuery}
        style={styles.input}
        placeholder="Enter movie name"
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" color="red" onPress={onClose} />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 10,
  },
});
