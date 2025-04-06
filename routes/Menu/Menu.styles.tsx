import { StyleSheet } from "react-native";

const MenuStyles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Biztosítja, hogy a SafeAreaView kitöltse a teljes képernyőt
  },

  container: {
    flexGrow: 1,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default MenuStyles;
