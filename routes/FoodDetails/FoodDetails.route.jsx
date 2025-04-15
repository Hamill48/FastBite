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
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton.component";
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

  const [selectedExtras, setSelectedExtras] = useState([]);

  // 🔥 Extrák kigyűjtése listába
  const extrasArray = food?.extras
    ? Object.entries(food.extras)
        .filter(([key]) => key.includes("extra_name"))
        .map(([key, value]) => {
          const index = key.replace("extra_name", "");
          return {
            name: value,
            price: food.extras[`extra_price${index}`] || 0,
            id: index,
          };
        })
    : [];

  // Extra kiválasztás toggle
  const toggleExtra = (extra) => {
    if (selectedExtras.includes(extra.id)) {
      setSelectedExtras((prev) => prev.filter((id) => id !== extra.id));
    } else {
      setSelectedExtras((prev) => [...prev, extra.id]);
    }
  };

  // Extrák összára
  const totalExtrasPrice = extrasArray
    .filter((extra) => selectedExtras.includes(extra.id))
    .reduce((sum, extra) => sum + extra.price, 0);

  // Végső ár (méret + extrák)
  const finalPrice = (selectedSizeData.price || 0) + totalExtrasPrice;

  useEffect(() => {
    if (food && food.sizes) {
      setSelectedSizeData({
        size: "size1",
        price: food.sizes["size1"]["size_price"],
      });
    }
  }, [food]);

  const saveCart = async () => {
    try {
      // 1. Kosár betöltése
      const storedCart = await AsyncStorage.getItem("cart");
      let cart = storedCart ? JSON.parse(storedCart) : [];

      // 2. Új tétel létrehozása
      const newCartItem = {
        id: food.id,
        name: food.name,
        image: food.image,
        size: selectedSizeData.size,
        sizeName: food.sizes?.[selectedSizeData.size]?.size_name || "",
        price: finalPrice,
        quantity: 1,
        extras: extrasArray.filter((extra) =>
          selectedExtras.includes(extra.id)
        ),
      };

      // 3. Ellenőrzés, hogy létezik-e már ugyanilyen tétel
      const existingItemIndex = cart.findIndex((item) => {
        const sameIdAndSize =
          item.id === newCartItem.id && item.size === newCartItem.size;

        const sameExtras =
          JSON.stringify(
            item.extras?.sort((a, b) => {
              const nameA = a.name || "";
              const nameB = b.name || "";
              return nameA.localeCompare(nameB);
            })
          ) ===
          JSON.stringify(
            newCartItem.extras?.sort((a, b) => {
              const nameA = a.name || "";
              const nameB = b.name || "";
              return nameA.localeCompare(nameB);
            })
          );

        return sameIdAndSize && sameExtras;
      });

      // 4. Mennyiség növelése vagy új tétel hozzáadása
      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push(newCartItem);
      }

      // 5. Kosár mentése
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      console.log("A termék sikeresen hozzáadva a kosárhoz.");

      Alert.alert("Siker", "A terméket sikeresen hozzáadtad a kosárhoz!");
    } catch (error) {
      console.error("Hiba a kosár mentésekor:", error);
      Alert.alert("Hiba", "Nem sikerült hozzáadni a terméket a kosárhoz.");
    }
  };

  return (
    <SafeAreaView style={FoodDetailStyles.safeContainer}>
      <BackButton />

      {food ? (
        <ScrollView contentContainerStyle={FoodDetailStyles.container}>
          <Image source={{ uri: food.image }} style={FoodDetailStyles.image} />

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

          {/* Méret választó */}
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

          {/* Extrák választó */}
          {extrasArray.length > 0 && (
            <View style={FoodDetailStyles.extrasContainer}>
              <Text style={FoodDetailStyles.extrasTitle}>Extrák:</Text>

              <View style={FoodDetailStyles.extrasList}>
                {extrasArray.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);

                  return (
                    <TouchableOpacity
                      key={extra.id}
                      onPress={() => toggleExtra(extra)}
                      style={[
                        FoodDetailStyles.extraItem,
                        isSelected && FoodDetailStyles.extraItemSelected,
                      ]}
                    >
                      <View style={FoodDetailStyles.checkboxContainer}>
                        <View
                          style={[
                            FoodDetailStyles.checkbox,
                            isSelected && FoodDetailStyles.checkboxSelected,
                          ]}
                        />
                        <Text
                          style={[
                            FoodDetailStyles.extraItemText,
                            isSelected &&
                              FoodDetailStyles.extraItemTextSelected,
                          ]}
                        >
                          {extra.name} +{extra.price} Ft
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {/* Ár + Kosárba gomb */}
          <Text style={FoodDetailStyles.price}>Ár: {finalPrice} Ft</Text>

          <PrimaryButton onPress={saveCart}>
            <Text style={FoodDetailStyles.addToCartText}>KOSÁRBA TESZEM</Text>
          </PrimaryButton>

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
