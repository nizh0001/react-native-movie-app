// Add comments in each function outlining their purpose.
//Add a custom launcher Icon and Splashscreen image for your app.

//Add, loaders, when needed, custom font
//Add placeholder for movies without image

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RentedScreen from "./screens/RentedScreen";
import { SearchProvider } from "./context/SearchContext";
import { StorageProvider } from "./context/StorageContext";
import WatchScreen from "./screens/WatchScreen";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "./theme/theme";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    fontRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    fontBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    fontMedium: require("./assets/fonts/Ubuntu-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <StorageProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={HomeScreen} />
                <Stack.Screen name="Rented" component={RentedScreen} />
                <Stack.Screen name="Watch" component={WatchScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </StorageProvider>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}
