import { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import CartRouteStyles from "./Cart.styles";

const CartRoute = () => {
  const [cart, setCart] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  const loadCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart"); // 'cart' kulccsal mentett adatokat kérjük le
      return jsonValue != null ? JSON.parse(jsonValue) : []; // Ha nincs adat, üres tömböt ad vissza
    } catch (error) {
      console.error("Hiba történt a kosár betöltésekor:", error);
      return [];
    }
  };

  // **1. useEffect az első betöltésre**
  useEffect(() => {
    const fetchCart = async () => {
      const loadedCart = await loadCart();
      setCart(loadedCart);
    };

    fetchCart();
  }, [cartUpdated]);

  // **2. useFocusEffect a képernyő fókuszba kerülésére**
  useFocusEffect(
    useCallback(() => {
      const fetchCart = async () => {
        const loadedCart = await loadCart();
        setCart(loadedCart);
      };

      fetchCart();
    }, [])
  );

  const updateCart = () => {
    setCartUpdated((prev) => !prev);
  };

  console.log("Kosár oldal: ", cart);

  return (
    <SafeAreaView style={CartRouteStyles.safeContainer}>
      <ScrollView contentContainerStyle={CartRouteStyles.container}>
        <Text style={CartRouteStyles.title}>Kosár</Text>

        {cart.length === 0 ? (
          <Text>A kosár üres.</Text>
        ) : (
          <View>
            <View style={CartRouteStyles.itemContainer}>
              <Image
                source={{
                  uri: cart.image,
                }}
                style={{ width: 100, height: 100 }}
              />

              <View style={CartRouteStyles.itemDetails}>
                <Text style={{ fontWeight: "bold" }}>{cart.name}</Text>
                <Text>{cart.price} Ft</Text>
              </View>

              <View style={CartRouteStyles.itemQuantityContainer}>
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 30, color: "white", fontWeight: "bold" }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: "white" }}>1</Text>

                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={CartRouteStyles.itemContainer}>
              <Image
                source={{
                  uri: cart.image,
                }}
                style={{ width: 100, height: 100 }}
              />

              <View style={CartRouteStyles.itemDetails}>
                <Text style={{ fontWeight: "bold" }}>{cart.name}</Text>
                <Text>{cart.price} Ft</Text>
              </View>

              <View style={CartRouteStyles.itemQuantityContainer}>
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 30, color: "white", fontWeight: "bold" }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: "white" }}>1</Text>

                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.clear();
            updateCart();
            console.log("Kosár törölve!");
          }}
        >
          <Text>Kosár törlése</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartRoute;
