import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../shared/colors/Colors';

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    scrollView:{
        marginHorizontal:5
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
    fname:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 70
    },
    lname:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 70,
        left: 165
    },
    tiFName:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.40,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 100,
    },
    tiLName:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.40,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 100,
        left: 165
    },
    country:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 160
    },
    tiCountry:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 185,
    },
    email:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 240
    },
    tiEmail:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 270,
    },
    mobile:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 325
    },
    tiMobile:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 350,
    },
    password:{
        position: "absolute",
        color: Colors.gray,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 13,
        marginTop: 405
    },
    tiPassword:{
        position: "absolute",
        backgroundColor: Colors.input,
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 430,
    },
    btnRegister:{
        position: "absolute",
        backgroundColor: Colors.base,
        width: Dimensions.get("screen").width * 0.85,
        padding: 15,
        borderRadius: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 510,
    },
    btnText:{        
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
    },
    fText:{
        position: "absolute",
        color: Colors.gray,
        bottom:10,
        left: 35
    },
    btnGoToLogin:{
        position: "absolute",
        bottom:10,
        left: 225
    },
    textGoToLogin:{        
        color: Colors.base,        
        fontWeight: "bold",        
        
    }
    
});

export default RegisterStyle