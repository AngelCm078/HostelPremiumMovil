import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import PropertiesStyle from './PropertiesStyle';
import ItemPropertie from '../../../components/views/item-propertie/ItemPropertie';

const PropertiesScreen = () => {
    let dir = "http://1a0193ea91e8.ngrok.io"

    const [properties, setProperties] = useState([]);
    const getProperties = async () => {
        const response = await fetch(`${dir}/properties`);
        const jsonResponse = await response.json();
        setProperties(jsonResponse.data);
    }
    useEffect(()=>{
        getProperties();
    },[]);

    return <View style={PropertiesStyle.container}>
        <FlatList data={properties} renderItem={({item, index}) => <ItemPropertie propertie={item} position={index}></ItemPropertie>}>

        </FlatList>
    </View>
}

export default PropertiesScreen