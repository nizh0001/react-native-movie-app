import { TextInput, View } from "react-native";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Dialog } from "@rneui/themed";
import { Button } from "@rneui/base";
import { styles } from "../theme/theme";

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
        style={styles.inputDialog}
        placeholder="Enter movie name"
      />
      <View style={styles.buttonContainerDialog}>
        <Button
          title="Cancel"
          titleStyle={styles.buttonCancelStyle}
          onPress={onClose}
          type="clear"
        />
        <Button
          title="Search"
          onPress={handleSearch}
          type="clear"
          titleStyle={styles.buttonOkStyle}
        />
      </View>
    </Dialog>
  );
}
