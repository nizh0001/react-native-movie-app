import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SearchProvider } from './context/SearchContext';
import { StorageProvider } from './context/StorageContext';
import { ThemeProvider } from '@rneui/themed';
import { theme } from './theme/theme';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import WatchScreen from './screens/WatchScreen';
import HomeScreen from './screens/HomeScreen';
import RentedScreen from './screens/RentedScreen';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    fontRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
    fontBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='auto' />
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <StorageProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen
                  name='Search'
                  component={HomeScreen}
                />
                <Stack.Screen
                  name='Rented'
                  component={RentedScreen}
                />
                <Stack.Screen
                  name='Watch'
                  component={WatchScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </StorageProvider>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}
