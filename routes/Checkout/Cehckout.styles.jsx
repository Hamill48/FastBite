import { StyleSheet } from "react-native";

const CheckoutStyles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Biztosítja, hogy a SafeAreaView kitöltse a teljes képernyőt
  },

  container: {
    flexGrow: 1,
    paddingTop: 60,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },

  customerTitle: {
    fontSize: 20,
    marginBottom: 40,
  },

  inputsContainer: {
    width: "100%",
  },

  label: {
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
});

export default CheckoutStyles;
