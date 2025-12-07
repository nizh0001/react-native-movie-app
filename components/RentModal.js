import { Text, View } from "react-native";
import { useSearch } from "../context/SearchContext";
import { useStorage } from "../context/StorageContext";
import { Dialog } from "@rneui/themed";
import { Button } from "@rneui/base";
import { styles } from "../theme/theme";

export default function RentModal({ visible, onClose, id }) {
  const { removeMovieFromSearchList, moviesData } = useSearch();
  const { saveMovieToStorage } = useStorage();

  function handleRentMovie() {
    const rentedMovie = moviesData.find((item) => item.id === id);

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
        <Button
          title="Cancel"
          titleStyle={styles.buttonCancelStyle}
          onPress={onClose}
          type="clear"
        />
        <Button
          title="Confirm"
          onPress={handleRentMovie}
          type="clear"
          titleStyle={styles.buttonOkStyle}
        />
      </View>
    </Dialog>
  );
}
