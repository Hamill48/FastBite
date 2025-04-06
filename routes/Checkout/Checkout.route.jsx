import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import BackButton from "../../components/BackButton/BackButton.component";
import { loadCart, saveCart, clearCart } from "../../utils/cartStorage";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton.component";

import CheckoutStyles from "./Cehckout.styles";

export default function CheckoutRoute() {
  const [cart, setCart] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

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

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={CheckoutStyles.safeContainer}>
      <BackButton />
      <ScrollView contentContainerStyle={CheckoutStyles.container}>
        <Text style={CheckoutStyles.title}>Pénztár</Text>
        <Text style={CheckoutStyles.customerTitle}>Vásárló adatai</Text>

        <View style={CheckoutStyles.inputsContainer}>
          <Text style={CheckoutStyles.label}>Teljes név</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="Írd be a teljes neved"
            value={name}
            onChangeText={setName}
          />

          <Text style={CheckoutStyles.label}>Telefonszám</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="+36 20 123 4567"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={CheckoutStyles.label}>Cím</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="3500 Miskolc, Pesti út 13."
            value={address}
            onChangeText={setAddress}
          />

          <Text style={CheckoutStyles.label}>Egyéb megjegyzés</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="3. emelet, 2. ajtó"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <PrimaryButton>MEGRENDELÉS</PrimaryButton>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
