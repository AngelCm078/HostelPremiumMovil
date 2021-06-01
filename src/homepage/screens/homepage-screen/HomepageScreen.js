import React from 'react';
import {View, Image, TouchableOpacity, StatusBar, Text, ImageBackground} from 'react-native';
import Colors from '../../../shared/colors/Colors';
import Style from './HomepageStyle';

const image = { uri: "https://1.bp.blogspot.com/-jyBsRf8_Wh0/XExoAK8ipPI/AAAAAAAACv4/WEieYFFAm0g22bjXYlXsWBzDIgbKYhZ4QCLcBGAs/s1600/luxurious-bedroom-design-habitacion-lujosa-05.jpg" };



const HomepageScreen = ({navigation}) => {
    const goToRegister = () =>{
        navigation.navigate('register');
    }
    const goToLogin = () =>{
        navigation.navigate('login');
    }
    return(
        <View style={Style.container}>
            <StatusBar backgroundColor={Colors.base}></StatusBar>      
            <ImageBackground source={image} style={Style.image}>
                <View style={Style.containerContent}>
                    <View style={Style.containerLogo}>
                        <Image source={require('./img/logo.png')} style={Style.logo}></Image>
                        <Text style={Style.text1}>Hostel</Text>
                        <Text style={Style.text2}>Premium</Text>
                    </View>
                    <View style={Style.containerbuttons}>
                        <TouchableOpacity style={Style.buttons} onPress={() => goToRegister()}>
                            <Text style={Style.textButton}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.buttons} onPress={() => goToLogin()}>
                            <Text style={Style.textButton}>Login</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>                
            </ImageBackground>
        </View>
    )
}

export default HomepageScreen;