import React, { useEffect } from 'react';
import { Text, Image, View, ActivityIndicator, StatusBar, ImageBackground } from 'react-native';
import Style from './SplashStyle';
import Colors from '../../../shared/colors/Colors';

const imageSplash = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/eb/1f/cb/outdoor-pool.jpg" };


const SplashScreen = ({ navigation }) => {
    const waitingtimesplash = () => {
        setTimeout(() => {
            navigation.navigate('homepage');
        }, 3000)
    }
    useEffect(() => {
        waitingtimesplash();
    }, [])
    return (
        <View style={Style.container}>
            <StatusBar backgroundColor={Colors.base}></StatusBar>
            <ImageBackground source={imageSplash} style={Style.image}>
                <View style={Style.container1}>
                    <Image source={require('./img/logo.png')} style={Style.logo}></Image>
                    <Text style={Style.text1}>Hostel</Text>
                    <Text style={Style.text2}>Premium</Text>
                    <ActivityIndicator size="small" color="#fff" style={Style.activiti}></ActivityIndicator>
                </View>
            </ImageBackground>

        </View>
    );
}

export default SplashScreen;