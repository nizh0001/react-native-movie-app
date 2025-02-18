import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./components/HomeScreen";
import RentedScreen from "./components/RentedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={HomeScreen} />
          <Stack.Screen name="Rented" component={RentedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
