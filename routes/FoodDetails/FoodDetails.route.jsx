import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BackButton from "../../components/BackButton/BackButton.component";
import { sortedSize } from "../../utils/sortedSize/sortedSize";

import FoodDetailStyles from "./FoodDetails.styles";

const FoodDetail = () => {
  const route = useRoute();
  const { food = null } = route.params || {};
  const sortedSizes = food ? sortedSize(food.sizes) : [];

  const [selectedSizeData, setSelectedSizeData] = useState({
    size: null,
    price: null,
  });

  useEffect(() => {
    if (food && food.sizes) {
      setSelectedSizeData({
        size: "size1",
        price: food.sizes["size1"]["size_price"],
      });
    }
  }, [food]);

  const saveCart = async () => {
    let cart = await AsyncStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];

    const newCartItem = {
      ...food,
      size: selectedSizeData.size,
      price: selectedSizeData.price,
      quantity: 1,
    };

    // Ellenőrizzük, hogy a kiválasztott étel index-e és mérete már létezik-e
    const existingItemIndex = cart.findIndex(
      (item) => item.id === newCartItem.id && item.size === newCartItem.size
    );

    if (existingItemIndex >= 0) {
      // Létezik már ez a termék, növeljük a mennyiségét
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(newCartItem);
    }

    // Elmentjük a localStorage-ba
    await AsyncStorage.setItem("cart", JSON.stringify(cart));

    Alert.alert("A terméket sikeresen hozzáadtad a kosárhoz!");
  };

  return (
    <SafeAreaView style={FoodDetailStyles.safeContainer}>
      <BackButton />

      {food ? (
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
                {index === food.allergens.length - 1
                  ? allergen
                  : `${allergen}, `}
              </Text>
            ))}
          </View>

          <View style={FoodDetailStyles.sizeButtonsContainer}>
            {sortedSizes.map(([key, value]) => {
              const isSelected = selectedSizeData.size === key;

              const sizeName = value.size_name || value[`${key}_name`];
              const sizePrice = value.size_price || value[`${key}_price`];

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() =>
                    setSelectedSizeData({
                      size: key,
                      price: sizePrice,
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
                    {sizeName}
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
      ) : (
        <ScrollView contentContainerStyle={FoodDetailStyles.container}>
          <Text>Hiba: Az étel adatai nem érhetők el.</Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FoodDetail;
