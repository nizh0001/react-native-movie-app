// a theme folder for your global theme.
// Add comments in each function outlining their purpose.
//Add a custom launcher Icon and Splashscreen image for your app.

//Wrap your app in a ThemeProvider from ReactNativeElements.

// Create a global theme in a single file inside your theme folder, where you define your light and dark colour schemes, plus component styles.

// If you want, you can create styled components or StyleSheet objects inside the global theme file too, which can be used throughout your app.

// Use the ReactNativeElements Card and Dialog component for the movie cards and the search and confirmation dialog.

//Each of the Context objects will have a custom hook that lets any component access the data from either provider.

//Add gestures and animations for user interactions with the Movie Cards in the Scrollable Lists. Add placeholder for movies without image.adding popups when renting or marking as watched.

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
