import { StyleSheet } from "react-native";

const HomeScreenStyles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Biztosítja, hogy a SafeAreaView kitöltse a teljes képernyőt
  },

  container: {
    flexGrow: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default HomeScreenStyles;
