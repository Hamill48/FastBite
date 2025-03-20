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
  },
});

export default FoodDetailStyles;
