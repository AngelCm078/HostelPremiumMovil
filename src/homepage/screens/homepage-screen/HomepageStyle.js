import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../shared/colors/Colors';

const HomepageStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    containerContent: {
        flex: 1,
        backgroundColor: Colors.transparencia
    },
    containerLogo: {
        height: Dimensions.get("screen").height * 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        position: "absolute",
        color: "white",
        fontSize: 60,
        fontFamily: "Roboto",
        fontWeight: "bold",
        bottom: 30
    },
    text2: {
        position: "absolute",
        color: "white",
        fontSize: 40,
        fontFamily: "Roboto",
        bottom: 5
    },
    logo: {
        width: 100,
        height: 100,
    },
    containerbuttons: {
        height: Dimensions.get("screen").height * 0.6,
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    textButton: {
        color: Colors.base,
        fontWeight: "bold",
    }
});

export default HomepageStyle;