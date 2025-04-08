import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import CallToActionStyles from './CallToAction.styles';

const CallToAction = () => {

    return(
        <ImageBackground 
            style={CallToActionStyles.container}
            source={{ uri: "https://maffiapizza.rk-team.hu/wp-content/uploads/2025/02/contact-back.webp" }}
            resizeMode="cover" 
        >
            <View style={CallToActionStyles.overlay}>
                <Text style={CallToActionStyles.title}>Rendelj most!</Text>
                <Text style={CallToActionStyles.description}>Válassz étlapunkról vagy hívj minket, és pár gomb nyomással megrendelheted kedvenc fogásaidat.</Text>
                <Text style={CallToActionStyles.description}>Rendelj most és ételed 30 percen belül házhoz szállítjuk!</Text>

                <View style={CallToActionStyles.buttonContainer}>
                <TouchableOpacity style={CallToActionStyles.button}>
                    <Text style={CallToActionStyles.buttonText}>TELEFONÁLOK!</Text>
                </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
};

export default CallToAction;