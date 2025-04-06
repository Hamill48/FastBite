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
import { useNavigation } from "@react-navigation/native";

import CartRouteStyles from "./Cart.styles";

const CartRoute = () => {
  const navigation = useNavigation();

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

  const updateQuantity = async (id, size, change) => {
    const storedCart = await AsyncStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    cart = cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + change }
        : item
    );

    // Ha az új quantity 0, szűrjük ki az adott elemet
    cart = cart.filter((item) => item.quantity > 0);

    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  return (
    <SafeAreaView style={CartRouteStyles.safeContainer}>
      <ScrollView contentContainerStyle={CartRouteStyles.container}>
        <Text style={CartRouteStyles.title}>Kosár</Text>

        {cart.length === 0 ? (
          <Text>A kosár üres.</Text>
        ) : (
          cart.map((item) => (
            <View key={`${item.id}-${item.size}`}>
              <View style={CartRouteStyles.itemContainer}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{ width: 100, height: 100 }}
                />

                <View style={CartRouteStyles.itemDetails}>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text>{item.sizes[item.size][`${item.size}_name`]}</Text>
                  <Text>{item.price} Ft</Text>
                </View>

                <View style={CartRouteStyles.itemQuantityContainer}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.size, -1)}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ color: "white" }}>{item.quantity}</Text>

                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.size, 1)}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <TouchableOpacity
                onPress={async () => {
                  await AsyncStorage.clear();
                  updateCart();
                  console.log("Kosár törölve!");
                }}
              >
                <Text>Kosár törlése</Text>
              </TouchableOpacity> */}
            </View>
          ))
        )}

        {cart.length === 0 ? (
          <View></View>
        ) : (
          <TouchableOpacity
            style={CartRouteStyles.orderButton}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          >
            <Text style={CartRouteStyles.orderButtonText}>
              TOVÁBB A FIZETÉSHEZ
            </Text>
          </TouchableOpacity>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartRoute;
