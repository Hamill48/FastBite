// AdminOrdersScreen.styles.js
import { StyleSheet } from "react-native";

const AdminOrdersStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  noOrdersText: {
    fontSize: 16,
    color: "#666",
  },
  orderBox: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderText: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default AdminOrdersStyles;
