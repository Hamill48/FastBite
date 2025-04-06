import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: "absolute",
        top: 55,
        left: 16,
        zIndex: 10,
        padding: 10,
      }}
    >
      <Icon name="arrow-back" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default BackButton;
