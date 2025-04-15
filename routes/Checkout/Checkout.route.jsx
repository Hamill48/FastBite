import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

import BackButton from "../../components/BackButton/BackButton.component";
import { loadCart } from "../../utils/cartStorage";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton.component";

import CheckoutStyles from "./Cehckout.styles";

export default function CheckoutRoute() {
  const [cart, setCart] = useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    note: "",
  });

  const handleInputChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

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

  console.log("Kosár tartalma rendelés előtt: ", cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const { name, phone, address, email, note } = form;

    if (name && phone && address && email) {
      const filteredCart = cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        size: item.sizeName || "", // ha van ilyen meződ
        extras:
          item.extras?.map((extra) => ({
            name: extra.name || "",
          })) || [],
      }));

      try {
        const docRef = await addDoc(collection(db, "orders"), {
          name,
          phone,
          address,
          email,
          note,
          status: "active",
          cart: filteredCart,
          price: totalPrice,
          createdAt: Timestamp.now(),
        });

        console.log("Sikeres mentés, rendelés ID: ", docRef.id);
        Alert.alert("Sikeres rendelés!");

        setForm({
          name: "",
          phone: "",
          address: "",
          email: "",
          note: "",
        });

        setCart([]);

        console.log("Kosár tartalma rendelés után: ", []);
      } catch (error) {
        console.error("Hiba a rendelésnél: ", error);
        Alert.alert("Hiba történt a rendelés során!");
      }
    } else {
      Alert.alert("Hiányzó adatok! Kérlek tölts ki minden kötelező mezőt!");
      return;
    }
  };

  return (
    <SafeAreaView style={CheckoutStyles.safeContainer}>
      <BackButton />
      <ScrollView contentContainerStyle={CheckoutStyles.container}>
        <Text style={CheckoutStyles.title}>Pénztár</Text>
        <Text style={CheckoutStyles.customerTitle}>Vásárló adatai</Text>

        <View style={CheckoutStyles.inputsContainer}>
          <Text style={CheckoutStyles.label}>Teljes név*</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="Írd be a teljes neved"
            value={form.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />

          <Text style={CheckoutStyles.label}>Telefonszám*</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="+36 20 123 4567"
            value={form.phone}
            onChangeText={(text) => handleInputChange("phone", text)}
            keyboardType="numeric"
          />

          <Text style={CheckoutStyles.label}>Email cím*</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="tesztelek@gmail.com"
            value={form.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />

          <Text style={CheckoutStyles.label}>Cím*</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="3500 Miskolc, Pesti út 13."
            value={form.address}
            onChangeText={(text) => handleInputChange("address", text)}
          />

          <Text style={CheckoutStyles.label}>Egyéb megjegyzés</Text>
          <TextInput
            style={CheckoutStyles.input}
            placeholder="3. emelet, 2. ajtó"
            value={form.note}
            onChangeText={(text) => handleInputChange("note", text)}
          />

          <Text>{totalPrice}</Text>
        </View>

        <PrimaryButton onPress={handleOrder}>MEGRENDELÉS</PrimaryButton>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
