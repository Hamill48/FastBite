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
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/barbecue-2.webp",
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Barbecue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
        <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/Maffia.webp",
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Maffia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={NewItemsStyles.newItem}>
        <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/Rustico.webp",
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text>Rustico</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewItems;
