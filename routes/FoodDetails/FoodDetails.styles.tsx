// src/routes/FoodDetail/FoodDetail.styles.js
import { StyleSheet } from "react-native";

const FoodDetailStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "#333",
  },

  ingredientsContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  allergensContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // plusz térköz
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

  extrasContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  extrasTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },

  extrasList: {
    flexDirection: "row",
    flexWrap: "wrap", // <<< ha nem fér ki, törik új sorba
    justifyContent: "center",
    gap: 10, // ha támogatott a gap, ha nem akkor helyette margin a boxokra
  },

  extraItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    minWidth: "45%", // legyen szépen elosztva két oszlopban
  },

  extraItemSelected: {
    backgroundColor: "#f0f0f0",
    borderColor: "#00a851", // kiválasztott színed
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 10,
  },

  checkboxSelected: {
    backgroundColor: "#00a851", // színkód amit írtál
    borderColor: "#00a851",
  },

  extraItemText: {
    fontSize: 14,
    color: "#333",
  },

  extraItemTextSelected: {
    fontWeight: "bold",
    color: "#00a851",
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
