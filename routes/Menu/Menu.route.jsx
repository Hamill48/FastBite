import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

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

  console.log("Foods:", foods); // Csak akkor fut le, ha a foods frissül

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ color: "black" }}>Étlap</Text>
    </View>
  );
};

export default MenuRoute;
