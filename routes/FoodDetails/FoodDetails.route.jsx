import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BackButton from "../../components/BackButton/BackButton.component";
import { sortSizes } from "../../utils/sortedSize/sortedSize";

import FoodDetailStyles from "./FoodDetails.styles";

const FoodDetail = () => {
  const route = useRoute();
  const { food } = route.params || {};
  const sortedSizes = sortSizes(food.sizes);

  const [selectedSizeData, setSelectedSizeData] = useState({
    size: null,
    price: null,
  });

  useEffect(() => {
    if (food) {
      setSelectedSizeData({
        size: "size1",
        price: food.sizes["size1"]["size1_price"],
      });
    }
  }, [food]);

  const saveCart = async () => {
    const cartItem = {
      ...food,
      size: selectedSizeData.size,
      price: selectedSizeData.price,
    };

    await AsyncStorage.setItem("cart", JSON.stringify(cartItem));
    console.log("Kosár tartalma:", JSON.stringify(cartItem));
  };

  return (
    <SafeAreaView style={FoodDetailStyles.safeContainer}>
      <BackButton />
      <ScrollView contentContainerStyle={FoodDetailStyles.container}>
        <Image
          source={{
            uri: food.image,
          }}
          style={{ width: 250, height: 250, marginBottom: 20 }}
        />

        <Text style={FoodDetailStyles.title}>{food.name}</Text>

        <View style={FoodDetailStyles.ingredientsContainer}>
          {food.ingredients.map((ingredient, index) => (
            <Text key={index}>
              {index === food.ingredients.length - 1
                ? ingredient
                : `${ingredient}, `}
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
          {sortedSizes.map(([key, value]) => {
            const isSelected = selectedSizeData.size === key;

            return (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  setSelectedSizeData({
                    size: key,
                    price: value[`${key}_price`],
                  })
                }
                style={[
                  FoodDetailStyles.sizeBox,
                  isSelected && FoodDetailStyles.sizeBoxSelected,
                ]}
              >
                <Text
                  style={[
                    FoodDetailStyles.sizeText,
                    isSelected && FoodDetailStyles.sizeTextSelected,
                  ]}
                >
                  {value[`${key}_name`]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={FoodDetailStyles.price}>
          Ár: {selectedSizeData.price} Ft
        </Text>

        <TouchableOpacity style={FoodDetailStyles.addToCartButton}>
          <Text style={FoodDetailStyles.addToCartText} onPress={saveCart}>
            KOSÁRBA TESZEM
          </Text>
        </TouchableOpacity>

        {/* További étel adatok: név, leírás, kép, stb. */}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetail;
