import { Pressable, Text, StyleSheet } from "react-native";

export default function Fab({ onPress, title }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    right: 40,
    backgroundColor: "#26653A",
    borderRadius: 50, // Circular shape
    paddingVertical: 12, // Add padding
    paddingHorizontal: 20, // Add padding
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60, // Ensure visibility
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
