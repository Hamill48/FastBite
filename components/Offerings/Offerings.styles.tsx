import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const OfferingsStyles = StyleSheet.create({
  offeringsContainer: {
    backgroundColor: "rgb(214, 214, 214)",
    height: 200,
    minWidth: width,
    paddingBottom: 20,
  },

  offeringsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  offeringsTitle: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },

  offeringsButton: {
    textDecorationLine: 'underline',
    fontSize: 15,
    margin: 20,
  },

  offer: {
    backgroundColor: "white",
    height: 100,
    width: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default OfferingsStyles;
