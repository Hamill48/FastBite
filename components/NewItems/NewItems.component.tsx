import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
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
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/pizza-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Text>Barbecue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
        <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/pizza-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Text>Maffia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
        <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/pizza-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
          <Text>Rustico</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewItems;
