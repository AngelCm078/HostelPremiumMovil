import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../shared/colors/Colors';

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 1,
        flex: 1,
        left: 15,
        marginTop: 40
    },
    title:{
        position: "absolute",
        color: Colors.base,
        fontFamily: "Roboto",
        fontSize: 35,
        fontWeight: "bold",
    },
    fEmail:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 70
    },
    tiFEmail:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.90,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 100,
    },
    password:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 160
    },
    tiPassword:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.90,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 185,
    },
    btnLogin:{
        position: "absolute",
        backgroundColor: Colors.base,
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
    },
    btnTextLogin:{        
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
    },

    btnInvited:{
        position: "absolute",
        backgroundColor: Colors.base,
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 380,
    },
    btnTextInvited:{        
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
    },
    fText:{
        position: "absolute",
        color: Colors.gray,
        bottom:100,
        left: 35
    },
    btnGoToRegister:{
        position: "absolute",
        bottom:100,
        left: 150
    },
    textGoToRegister:{        
        color: Colors.base,        
        fontWeight: "bold",
    }
})

export default LoginStyle