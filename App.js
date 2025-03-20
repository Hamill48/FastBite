import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './routes/HomeScreen/HomeScreen.route';
import MenuStack from './navigation/MenuStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Étlap" component={MenuStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}