import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import NewItemsStyles from "./NewItems.styles";

const NewItems = () => {
  return (
    <View style={NewItemsStyles.newItemsContainer}>
      <Text style={NewItemsStyles.newItemsTitle}>FastBite Újdonság</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center", // igazítás a vízszintes tengely mentén
          justifyContent: "center", // igazítás a függőleges tengely mentén
        }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={NewItemsStyles.newItem}>
          <Text>Barbecue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
          <Text>Maffia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
          <Text>Rustico</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewItems;
