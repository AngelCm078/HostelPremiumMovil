import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../shared/colors/Colors';

const ItemPropertieStyle = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },
    containerPropertie:{
        height: Dimensions.get("screen").height * 0.8,
        backgroundColor: Colors.input,
        borderRadius: 20,
        // justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    coverPage:{
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        // left: 5, 
        borderRadius: 20,        
        width: Dimensions.get("screen").width * .95,
        height: 280       
    },
    txtUbicacion:{
        position: "absolute",
        backgroundColor: "green",
        borderRadius: 30,
        padding: 8,
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold",
        right: 5,
        marginTop: 7
    },
    txtAddress:{
        position: "absolute",
        fontSize: 20,
        color: Colors.base,
        fontWeight: "bold",
        alignItems: "center",
        bottom: 200
    }, 
    txtValor:{
        position: "absolute",
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        left: 20,
        bottom: 160
    },
    txtValorC:{
        position: "absolute",
        fontSize: 18,
        color: Colors.base,
        fontWeight: "bold",
        left: 130,
        bottom: 160
    },
    txtComodidades:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        bottom: 180
    },
    txtHabitaciones:{
        position: "absolute",
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        left: 20,
        bottom: 90
    },
    txtHabitacionesV:{
        position: "absolute",
        fontSize: 18,
        color: Colors.base,
        fontWeight: "bold",
        left: 135,
        bottom: 90
    },
    txtBanos:{
        position: "absolute",
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        left: 20,
        bottom: 50
    },
    txtBanosV:{
        position: "absolute",
        fontSize: 18,
        color: Colors.base,
        fontWeight: "bold",
        left: 135,
        bottom: 50
    },
    txtEstado:{
        position: "absolute",
        backgroundColor: "gray",
        borderRadius: 30,
        padding: 8,
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        right: 5,
        bottom: 7
    }
});

export default ItemPropertieStyle