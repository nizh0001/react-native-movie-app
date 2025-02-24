import { Pressable } from "react-native";
import { Icon } from "@rneui/base";
import { styles } from "../theme/theme";

export default function Fab({ onPress }) {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Icon
        name="search"
        type="material"
        size={28}
        color={"white"}
        style={{ margin: 0, padding: 0 }}
      />
    </Pressable>
  );
}
