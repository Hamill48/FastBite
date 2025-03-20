// src/routes/FoodDetail/FoodDetail.route.js
import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from '@react-navigation/native';  // A route hook

const FoodDetail = () => {
  const route = useRoute();
  const { foodID } = route.params;  // Lekérjük a foodID-t a paraméterekből

  // Itt kérheted le az étel részletes adatait a foodID alapján (pl. API, Firebase)

  return (
    <View>
      <Text>Étel részletek</Text>
      <Text>ID: {foodID}</Text>
      {/* Itt add meg az étel részletes adatait (név, leírás, kép, stb.) */}
    </View>
  );
};

export default FoodDetail;
