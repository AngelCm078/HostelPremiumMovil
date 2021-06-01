import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import UsersStyle from './UsersStyle';
import ItemUser from '../../../components/views/item-user/ItemUser';

const UsersScreen = () => {
    let dir = "http://1a0193ea91e8.ngrok.io"
    
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(`${dir}/users`);
        const jsonResponse = await response.json();
        setUsers(jsonResponse.data);
    }
    useEffect(()=>{
        getUsers();
    },[]);
    return <View style={UsersStyle.container}>
        <FlatList  data={users} renderItem={({item, index}) => <ItemUser  user={item} position={index}></ItemUser>}>

        </FlatList>
    </View>
}

export default UsersScreen
