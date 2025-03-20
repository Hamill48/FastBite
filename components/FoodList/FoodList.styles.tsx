import { StyleSheet } from "react-native";

const foodListStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  foodContainer: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default foodListStyles;
