import React from "react";
import { View, Image, Text } from "react-native";

import foodListStyles from "./FoodList.styles";

const FoodList = ({ foods }) => {
  return (
    <View style={foodListStyles.container}>
      {foods.map((food) => (
        <View key={food.id} style={foodListStyles.foodContainer}>
          <Image
            source={{
              uri: food.image,
            }}
            style={foodListStyles.image}
          />
          <Text>{food.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default FoodList;
