// AdminOrdersScreen.jsx
import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../utils/firebaseConfig";
import AdminOrdersStyles from "./Admin.styles";

const AdminRoute = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersSnapshot = await getDocs(collection(db, "orders"));
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Hiba a rendelések lekérdezésekor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const fetchOrders = async () => {
        try {
          const ordersSnapshot = await getDocs(collection(db, "orders"));
          const ordersList = ordersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(ordersList);
        } catch (error) {
          console.error("Hiba a rendelések lekérdezésekor:", error);
        }
      };

      fetchOrders();
    }, [])
  );

  return (
    <SafeAreaView style={AdminOrdersStyles.safeContainer}>
      <ScrollView contentContainerStyle={AdminOrdersStyles.container}>
        <Text style={AdminOrdersStyles.title}>Rendelések</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : orders.length === 0 ? (
          <Text style={AdminOrdersStyles.noOrdersText}>Nincs rendelés.</Text>
        ) : (
          orders.map((order) => (
            <View key={order.id} style={AdminOrdersStyles.orderBox}>
              <Text style={AdminOrdersStyles.orderTitle}>{order.name}</Text>
              <Text style={AdminOrdersStyles.orderText}>
                Email: {order.email}
              </Text>
              <Text style={AdminOrdersStyles.orderText}>
                Tel: {order.phone}
              </Text>
              <Text style={AdminOrdersStyles.orderText}>
                Cím: {order.address}
              </Text>
              <Text style={AdminOrdersStyles.orderText}>
                Státusz: {order.status}
              </Text>
              <Text style={AdminOrdersStyles.orderText}>
                {order.price}
                Ft
              </Text>
            </View>
          ))
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminRoute;
