// src/utils/cartStorage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

// Kosár betöltése
export const loadCart = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("cart"); // 'cart' kulccsal mentett adatokat kérjük le
    return jsonValue != null ? JSON.parse(jsonValue) : []; // Ha nincs adat, üres tömböt ad vissza
  } catch (error) {
    console.error("Hiba történt a kosár betöltésekor:", error);
    return [];
  }
};

// Kosár mentése
export const saveCart = async (cart) => {
  try {
    const jsonValue = JSON.stringify(cart);
    await AsyncStorage.setItem("cart", jsonValue);
  } catch (error) {
    console.error("Hiba történt a kosár mentésekor:", error);
  }
};

// Kosár törlése
export const clearCart = async () => {
  try {
    await AsyncStorage.removeItem("cart");
  } catch (error) {
    console.error("Hiba történt a kosár törlésekor:", error);
  }
};

// Kosár mennyiség módosítása
export const updateCartQuantity = async (id, size, change) => {
  try {
    const storedCart = await AsyncStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    cart = cart.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + change }
        : item
    );

    // Szűrjük ki azokat, ahol quantity <= 0
    cart = cart.filter((item) => item.quantity > 0);

    await AsyncStorage.setItem("cart", JSON.stringify(cart));

    return cart; // <<< Fontos: visszaadjuk az új kosarat!
  } catch (error) {
    console.error("Hiba történt a kosár mennyiségének módosításakor:", error);
    return [];
  }
};
