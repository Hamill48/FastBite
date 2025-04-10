import { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

import NewItemsStyles from "./NewItems.styles";

const NewItems = () => {
  const [randomFoods, setRandomFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "foods"); // Gyűjtemény referenciája
        const snapshot = await getDocs(productsCollection); // Dokumentumok lekérése
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRandomFoods(
          [...productList].sort(() => Math.random() - 0.5).slice(0, 3)
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={NewItemsStyles.newItemsContainer}>
      <Text style={NewItemsStyles.newItemsTitle}>FastBite Újdonság</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsHorizontalScrollIndicator={false}
      >
        {loading ? (
          <>
            <TouchableOpacity style={NewItemsStyles.newItem}>
              <Text>Betöltés...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NewItemsStyles.newItem}>
              <Text>Betöltés...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NewItemsStyles.newItem}>
              <Text>Betöltés...</Text>
            </TouchableOpacity>
          </>
        ) : (
          randomFoods.map((food) => {
            return (
              <TouchableOpacity
                style={NewItemsStyles.newItem}
                onPress={() => navigation.navigate("FoodDetail", { food })}
                key={food.id}
              >
                <Image
                  source={{
                    uri: food.image,
                  }}
                  style={{ width: 150, height: 150 }}
                />
                <Text>{food.name}</Text>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default NewItems;
