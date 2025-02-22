import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RentedScreen from "./screens/RentedScreen";
import { SearchProvider } from "./context/SearchContext";
import { StorageProvider } from "./context/StorageContext";
import WatchScreen from "./screens/WatchScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SearchProvider>
      <StorageProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={HomeScreen} />
            <Stack.Screen name="Rented" component={RentedScreen} />
            <Stack.Screen name="Watch" component={WatchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StorageProvider>
    </SearchProvider>
  );
}
