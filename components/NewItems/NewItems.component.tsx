import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import NewItemsStyle from "./NewItems.styles";

const NewItems = () => {
  return (
    <View style={NewItemsStyle.newItemsContainer}>
      <Text style={NewItemsStyle.newItemsTitle}>FastBite Újdonság</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center", // igazítás a vízszintes tengely mentén
          justifyContent: "center", // igazítás a függőleges tengely mentén
        }}
      >
        <TouchableOpacity style={NewItemsStyle.newItem}>
          <Text>Barbecue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyle.newItem}>
          <Text>Maffia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyle.newItem}>
          <Text>Rustico</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewItems;
