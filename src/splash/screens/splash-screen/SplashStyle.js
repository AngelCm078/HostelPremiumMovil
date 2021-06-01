import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../shared/colors/Colors'

const SplashStyle = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        
    },
    container1:{
        height: Dimensions.get("screen").height * 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.transparencia,
    },    
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text1: {
        position: "absolute",
        color: Colors.white,
        fontSize: 60,
        fontFamily: "Roboto",
        fontWeight: "bold",
        bottom: 100
    },
    text2: {
        position: "absolute",
        color: Colors.white,
        fontSize: 40,
        fontFamily: "Roboto",
        bottom: 70
    },
    logo: {
        position: "absolute",
        width: 100,
        height: 100,
        bottom: 150
    },
    activiti: {
        position: "absolute",
        bottom: 50
    }

})

export default SplashStyle