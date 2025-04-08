import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import FoodList from "../../components/FoodList/FoodList.component";
import BackButton from "../../components/BackButton/BackButton.component";

import MenuStyles from "./Menu.styles";

const MenuRoute = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "foods"); // Gyűjtemény referenciája
        const snapshot = await getDocs(productsCollection); // Dokumentumok lekérése
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoods(productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={MenuStyles.safeContainer}>
      <BackButton />
      <ScrollView contentContainerStyle={MenuStyles.container}>
        <Text style={MenuStyles.title}>Kínálatunk</Text>

        <FoodList foods={foods} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuRoute;
