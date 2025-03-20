import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './routes/HomeScreen/HomeScreen.route';
import MenuRoute from './routes/Menu/Menu.route';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Étlap" component={MenuRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}