import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Stats from './screens/Stats';
import DetailsScreen from './screens/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsWorkout from './screens/DetailsWorkout';
import Seance from './screens/Seance';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="DetailsWorkout" component={DetailsWorkout}/>
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeTab') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Stats') {
        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#D0FD3E',
    tabBarInactiveTintColor: 'gray',
    borderTopWidth: 0,
    tabBarStyle: {
      backgroundColor: '#1C1C1E',
      height: 80,
    },
    tabBarItemStyle: {
      margin: 5,
      borderRadius: 10,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" options={{ headerShown: false }} component={HomeStackScreen} />
      <Tab.Screen name="Stats" component={Stats} />
    </Tab.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="TabNavigator" options={{ headerShown: false }} component={TabNavigator} />
      <MainStack.Screen name="Seance" options={{headerShown: false}} component={Seance} />
    </MainStack.Navigator>
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
    'integralCF-Bold': require('./assets/fonts/IntegralCF-Bold.otf'),
    'open-sans-800': require('./assets/fonts/open-sans-800.ttf'),
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
        <MainStackScreen />
      </NavigationContainer>
    );
  }
}
