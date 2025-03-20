import { StyleSheet } from "react-native";

const MenuStyles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Biztosítja, hogy a SafeAreaView kitöltse a teljes képernyőt
  },

  container: {
    flexGrow: 1,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 40,
  },
});

export default MenuStyles;
