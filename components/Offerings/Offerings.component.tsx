import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import OfferingsStyles from "./Offerings.styles";

const Offerings = () => {
  return (
    <View style={OfferingsStyles.offeringsContainer}>
      <Text style={OfferingsStyles.offeringsTitle}>Kínálat</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center", // igazítás a vízszintes tengely mentén
          justifyContent: "center", // igazítás a függőleges tengely mentén
        }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/pizza-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/burgerek-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/foetelek-ikon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/salatak-ikon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/koretek-ikon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={OfferingsStyles.offer}>
          <Image
            source={{
              uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/dessert-icon.webp",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Offerings;
