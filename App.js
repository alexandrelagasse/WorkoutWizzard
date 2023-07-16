import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Stats from './screens/Stats';
import DetailsScreen from './screens/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ome" options={{ headerShown: false }} component={Home} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans-regular': require('./assets/fonts/open-sans-regular.ttf'),
    'open-sans-600': require('./assets/fonts/open-sans-600.ttf'),
    'instrument-sans-600': require('./assets/fonts/instrument-sans-600.ttf'),
    'instrument-sans-regular': require('./assets/fonts/instrument-sans-regular.ttf'),
    'open-sans-700': require('./assets/fonts/open-sans-700.ttf'),
    'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
    // add other fonts as needed
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Garder l'écran de démarrage affiché jusqu'à ce qu'on soit prêt
        await SplashScreen.preventAutoHideAsync();
        // Vérifier si les polices sont chargées
        if (fontsLoaded) {
          // Cacher l'écran de démarrage
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
  
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStackScreen} />
        <Tab.Screen name="Stats" component={Stats} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}
