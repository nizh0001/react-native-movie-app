import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function HomeScreen() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return <Button title="Rented" onPress={() => nav.navigate("Rented")} />;
      },
    });
  }, [nav]);

  return <Text>Home/Search screen</Text>;
}
