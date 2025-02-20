import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RentedScreen from "./screens/RentedScreen";
import { SearchProvider } from "./context/SearchContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SearchProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={HomeScreen} />
          <Stack.Screen name="Rented" component={RentedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchProvider>
  );
}
