// src/navigation/MenuStack.js
import { createStackNavigator } from "@react-navigation/stack";
import MenuRoute from "../routes/Menu/Menu.route";  // A menü oldal
import FoodDetail from "../routes/FoodDetails/FoodDetails.route";

const Stack = createStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={MenuRoute} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
}
