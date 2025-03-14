import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './routes/HomeScreen/HomeScreen.route';

import NewItems from './components/NewItems/NewItems.component';
import Offerings from './components/Offerings/Offerings.component';

import AppStyles from './Style';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Étlap" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}