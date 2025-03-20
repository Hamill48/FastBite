import React from 'react';
import { Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';

import FoodDetailStyles from './FoodDetails.styles';

const FoodDetail = () => {
  const route = useRoute();
  const { food } = route.params;  // Lekérjük a foodID-t a paraméterekből

  // Itt kérheted le az étel részletes adatait a foodID alapján (pl. API, Firebase)

  return (
    <SafeAreaView style={FoodDetailStyles.safeContainer}>
      <ScrollView contentContainerStyle={FoodDetailStyles.container}>
      <Image
            source={{
              uri: food.image,
            }}
            style={{ width: 250, height: 250, marginBottom: 20, }}
          />
        <Text style={FoodDetailStyles.title}>{food.name}</Text>
        {/* <Text style={FoodDetailStyles.foodInfo}>ID: {food.id}</Text> */}
        <View style={FoodDetailStyles.ingredientsContainer}>
          {food.ingredients.map((ingredient, index) => (
            <Text key={index}>
              {index === food.ingredients.length - 1 ? ingredient : `${ingredient}, `}
            </Text>
          ))}
        </View>
        {/* További étel adatok: név, leírás, kép, stb. */}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetail;
