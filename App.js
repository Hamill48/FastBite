import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';

import NewItems from './components/NewItems/NewItems.component';

import AppStyles from './Style';

export default function App() {
  return (
    <SafeAreaView style={[AppStyles.container, { paddingTop: 40 }]}>
      <Text style={AppStyles.title}>FastBite</Text>
      <NewItems />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}