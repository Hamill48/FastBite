import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./routes/HomeScreen/HomeScreen.route";
import MenuStack from "./navigation/MenuStack";
import CartRoute from "./routes/Cart/Cart.route";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#B63130",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Kezdőképernyő"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Étlap"
            component={MenuStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="pizza-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Kosár"
            component={CartRoute}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
