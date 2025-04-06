import { SafeAreaView, ScrollView, Text, StatusBar } from "react-native";

import BackButton from "../../components/BackButton/BackButton.component";

import CheckoutStyles from "./Cehckout.styles";

export default function CheckoutRoute() {
  return (
    <SafeAreaView style={CheckoutStyles.safeContainer}>
      <BackButton />
      <ScrollView contentContainerStyle={CheckoutStyles.container}>
        <Text style={CheckoutStyles.title}>Pénztár</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
