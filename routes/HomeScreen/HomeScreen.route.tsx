import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import NewItems from '../../components/NewItems/NewItems.component';
import Offerings from '../../components/Offerings/Offerings.component';
import HomeScreenStyles from './HomeScreen.styles';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[HomeScreenStyles.container, { paddingTop: 40 }]}>
      <Text style={HomeScreenStyles.title}>FastBite</Text>
      <NewItems />
      <Offerings />
      <Text>Open up HomeScreen.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
