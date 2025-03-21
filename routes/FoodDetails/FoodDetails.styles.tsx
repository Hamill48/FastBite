// src/routes/FoodDetail/FoodDetail.styles.js
import { StyleSheet } from "react-native";

const FoodDetailStyles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Kitölti a teljes képernyőt
  },

  container: {
    flexGrow: 1,
    paddingVertical: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#333", // Szín hozzáadása a címhez
  },

  ingredientsContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row", // Az elemek egymás mellett jelennek meg
    flexWrap: "wrap",
    marginBottom: 20,
  },

  allergensContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  sizeBox: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 20,
    borderRadius: 8,
    alignItems: "center",
  },

  sizeBoxSelected: {
    backgroundColor: "#B63130",
    borderColor: "darkred",
  },

  sizeText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },

  sizeTextSelected: {
    color: "#fff",
  },

  sizeButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  price: {
    fontSize: 18,
    marginBottom: 20,
  },

  addToCartButton: {
    backgroundColor: "#B63130",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  addToCartText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FoodDetailStyles;
