import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';

import NewItems from './components/NewItems/NewItems.component';
import Offerings from './components/Offerings/Offerings.component';

import AppStyles from './Style';

export default function App() {
  return (
    <SafeAreaView style={[AppStyles.container, { paddingTop: 40 }]}>
      <Text style={AppStyles.title}>FastBite</Text>
      <NewItems />
      <Offerings />
      <Text>Open up App.js to start working on yaour app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}