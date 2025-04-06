import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import NewItems from "../../components/NewItems/NewItems.component";
import Offerings from "../../components/Offerings/Offerings.component";
import CallToAction from "../../components/CallToAction/CallToAction";

import HomeScreenStyles from "./HomeScreen.styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeScreenStyles.safeContainer}>
      <ScrollView contentContainerStyle={HomeScreenStyles.container}>
        <Text style={HomeScreenStyles.title}>FastBite</Text>
        <NewItems />
        <Offerings />
        <CallToAction />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
