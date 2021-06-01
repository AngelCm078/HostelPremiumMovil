import React from 'react';
import { View, Image, TouchableOpacity, StatusBar, Text} from 'react-native';
import Colors from '../../../shared/colors/Colors';
import SubMenuStyle from './SubMenuStyle';


const SubMenuScreen = ({ navigation }) => {
    const goToUsers = () => {
        navigation.navigate('users');
    }
    const goToProperties = () => {
        navigation.navigate('properties');
    }
    return (
        <View>
            <StatusBar backgroundColor={Colors.base}></StatusBar>

            <View style={SubMenuStyle.container}>
                <View style={SubMenuStyle.containerLogo} >
                    <Image source={require('./img/logo-black.png')} style={SubMenuStyle.logo} ></Image>
                    <Text style={SubMenuStyle.text1}>Hostel</Text>
                    <Text style={SubMenuStyle.text2}>Premium</Text>
                </View>
                <View style={SubMenuStyle.containerbuttons} >
                    <TouchableOpacity style={SubMenuStyle.buttons} onPress={() => goToUsers()}>
                        <Text style={SubMenuStyle.textButton}>All Users</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={SubMenuStyle.buttons} onPress={() => goToProperties()}>
                        <Text style={SubMenuStyle.textButton}>All Properties</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default SubMenuScreen