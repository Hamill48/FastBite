// src/navigation/MenuStack.js
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../routes/HomeScreen/HomeScreen.route";
import FoodDetail from "../routes/FoodDetails/FoodDetails.route";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
}
