import { StyleSheet } from "react-native";

const NewItemsStyle = StyleSheet.create({
  newItemsContainer: {
    backgroundColor: "red",
    height: 300,
    paddingBottom: 20,
  },

  newItemsTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },

  newItem: {
    backgroundColor: "white",
    height: 200,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default NewItemsStyle;
