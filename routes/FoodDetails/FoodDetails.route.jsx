import { useState } from 'react';
import { Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';

import FoodDetailStyles from './FoodDetails.styles';

const FoodDetail = () => {
  const [selectedSize, setSelectedSize] = useState('size1');

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

      <View style={FoodDetailStyles.ingredientsContainer}>
        {food.ingredients.map((ingredient, index) => (
          <Text key={index}>
            {index === food.ingredients.length - 1 ? ingredient : `${ingredient}, `}
          </Text>
        ))}
      </View>

      <View style={FoodDetailStyles.allergensContainer}>
        {food.allergens.map((allergen, index) => (
          <Text key={index}>
            {index === food.allergens.length - 1 ? allergen : `${allergen}, `}
          </Text>
        ))}
      </View>

      <View style={FoodDetailStyles.sizeButtonsContainer}>
        {Object.entries(food.sizes).map(([key, value]) => {
          const isSelected = selectedSize === key;

          return(
            <TouchableOpacity 
              key={key} onPress={() => {setSelectedSize(key);}}       
              style={[
                FoodDetailStyles.sizeBox,
                isSelected && FoodDetailStyles.sizeBoxSelected
              ]}>

              <Text style={[FoodDetailStyles.sizeText, isSelected && FoodDetailStyles.sizeTextSelected]}>{value[`${key}_name`]}</Text>
            </TouchableOpacity>
          );        
        })}
      </View>

      <Text>
        Ár: {food.sizes[selectedSize][`${selectedSize}_price`]} Ft
      </Text>

      <TouchableOpacity style={FoodDetailStyles.addToCartButton}>
        <Text style={FoodDetailStyles.addToCartText}>KOSÁRBA TESZEM</Text>
      </TouchableOpacity>

        {/* További étel adatok: név, leírás, kép, stb. */}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetail;
