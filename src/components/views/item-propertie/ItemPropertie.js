import React from 'react';
import { Text, Image, View } from 'react-native';
import ItemPropertieStyle from './ItemPropertieStyle';

const ItemPropertie = (props) => {

    propertie = props.propertie;

    let estado="";

    if(propertie.availability){
        estado="Disponible";
    }
    else{
        estado="Arrendado";
    }

    return (
        <View style={ItemPropertieStyle.container}>
            <View style={ItemPropertieStyle.containerPropertie}>
                <Image style={ItemPropertieStyle.coverPage} source={{ uri: propertie.coverPage }} ></Image>
                <Text style={ItemPropertieStyle.txtUbicacion}>{propertie.city} - {propertie.country}</Text>
                <Text style={ItemPropertieStyle.txtAddress}>Dirección: {propertie.address}</Text>
                <Text style={ItemPropertieStyle.txtValor}>Valor Noche:</Text>
                <Text style={ItemPropertieStyle.txtValorC}>{propertie.value} {propertie.currency} </Text>
                <Text style={ItemPropertieStyle.txtComodidades}>COMODIDADES</Text>
                <Text style={ItemPropertieStyle.txtHabitaciones}>Habitaciones:</Text>
                <Text style={ItemPropertieStyle.txtHabitacionesV}>{propertie.rooms}</Text>
                <Text style={ItemPropertieStyle.txtBanos}>Baños: </Text>
                <Text style={ItemPropertieStyle.txtBanosV}>{propertie.toilets}</Text>
                <Text style={ItemPropertieStyle.txtEstado}>{estado}</Text>
            </View>
        </View>
    )
}

export default ItemPropertie