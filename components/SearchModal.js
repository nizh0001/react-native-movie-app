import { TextInput, View } from "react-native";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { Dialog } from "@rneui/themed";
import { styles } from "../theme/theme";
import { useTheme } from "@rneui/themed";

export default function SearchModal({ visible, onClose }) {
  const { fetchMovies } = useSearch();
  const [query, setQuery] = useState("");
  const { theme } = useTheme();

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
        <Dialog.Button
          title="Cancel" // This remains the same
          titleStyle={{ color: theme.colors.secondary }} // This remains the same
          onPress={onClose} // This remains the same
        />
        <Dialog.Button
          title="Search" // Updated this line to directly pass the `title` prop
          onPress={handleSearch} // Directly passing the onPress prop, no change needed here
        />
      </View>
    </Dialog>
  );
}
