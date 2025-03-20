import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import foodListStyles from "./FoodList.styles";

const FoodList = ({ foods }) => {
  const navigation = useNavigation();

  return (
    <View style={foodListStyles.container}>
      {foods.map((food) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("FoodDetail", { food })}
          key={food.id}
          style={foodListStyles.foodContainer}
        >
          <Image
            source={{
              uri: food.image,
            }}
            style={foodListStyles.image}
          />
          <Text>{food.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodList;
