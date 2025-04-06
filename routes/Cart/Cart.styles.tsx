import { StyleSheet } from "react-native";

const CartRouteStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },

  itemContainer: {
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 7,
    borderRadius: 10,
  },

  itemDetails: {
    height: 50,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemQuantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 100,
    backgroundColor: "#00A851",
  },

  totalPrice: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartRouteStyles;
