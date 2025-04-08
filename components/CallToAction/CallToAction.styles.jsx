import { Dimensions, StyleSheet } from "react-native"

const width = Dimensions.get("window").width;

const CallToActionStyles = StyleSheet.create({
    container: {
        width: width,
    },

    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 20,
    },

    description: {
        color: "white",
        marginBottom: 20,
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 150,
        height: 50,
        backgroundColor: "#B63130",
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CallToActionStyles;