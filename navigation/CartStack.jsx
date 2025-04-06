// src/navigation/CartStack.js
import { createStackNavigator } from "@react-navigation/stack";
import CartRoute from "../routes/Cart/Cart.route";
import CheckoutRoute from "../routes/Checkout/Checkout.route";

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartRoute} />
      <Stack.Screen name="Checkout" component={CheckoutRoute} />
    </Stack.Navigator>
  );
}
