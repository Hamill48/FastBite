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

import { loadCart, updateCartQuantity } from "../../utils/cartStorage";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton.component";

import CartRouteStyles from "./Cart.styles";

const CartRoute = () => {
  const navigation = useNavigation();

  const [cart, setCart] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // **1. useEffect az első betöltésre**
  useEffect(() => {
    const fetchCart = async () => {
      const loadedCart = await loadCart();
      setCart(loadedCart);
    };

    fetchCart();
  }, []);

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

  const updateQuantity = async (id, size, change) => {
    const updatedCart = await updateCartQuantity(id, size, change);
    setCart(updatedCart); // <- beállítod az új kosarat a state-be
  };

  return (
    <SafeAreaView style={CartRouteStyles.safeContainer}>
      <ScrollView contentContainerStyle={CartRouteStyles.container}>
        <Text style={CartRouteStyles.title}>Kosár</Text>

        {cart.length === 0 ? (
          <Text>A kosár üres.</Text>
        ) : (
          cart.map((item) => (
            <View
              key={`${item.id}-${item.size}-${
                item.extras?.map((extra) => extra.name).join("-") || "noextras"
              }`}
            >
              <View style={CartRouteStyles.itemContainer}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{ width: 100, height: 100 }}
                />

                <View style={CartRouteStyles.itemDetails}>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text>{item.sizeName}</Text>
                  <Text>{item.price} Ft</Text>

                  {/* Kiválasztott extrák megjelenítése (összeggel) */}
                  {item.extras && item.extras.length > 0 && (
                    <Text style={{ fontSize: 12, color: "gray", marginTop: 5 }}>
                      + Extrák
                    </Text>
                  )}
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
          <View>
            <Text style={CartRouteStyles.totalPrice}>
              Összesen: {totalPrice} Ft
            </Text>
            <TouchableOpacity
              style={CartRouteStyles.orderButton}
              onPress={() => {
                navigation.navigate("Checkout");
              }}
            >
              <PrimaryButton
                onPress={() => {
                  navigation.navigate("Checkout");
                }}
              >
                TOVÁBB A FIZETÉSHEZ
              </PrimaryButton>
            </TouchableOpacity>
          </View>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartRoute;
