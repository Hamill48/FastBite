import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import CartRouteStyles from "./Cart.styles";

const CartRoute = () => {
  return (
    <SafeAreaView style={CartRouteStyles.safeContainer}>
      <ScrollView contentContainerStyle={CartRouteStyles.container}>
        <Text style={CartRouteStyles.title}>Kosár</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartRoute;
