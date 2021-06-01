import React from 'react';
import { View, TextInput, TouchableOpacity, StatusBar, Text } from 'react-native'
import LoginStyle from './LoginStyle';

const LoginScreen = ({ navigation }) => {

    const goToSubmenu = () => {
        navigation.navigate('submenu');
    }

    const goToRegister = () => {
        navigation.navigate('register');
    }


    return (
        <View style={LoginStyle.container}>
            <View style={LoginStyle.inputDataContainer}>

                <Text style={LoginStyle.title}>Login</Text>

                <Text style={LoginStyle.fEmail}>YOUR EMAIL:</Text>
                <TextInput placeholder="john@yahoo.es" style={LoginStyle.tiFEmail} inlineImageLeft="outline_mail_black_18" inlineImagePadding={15}></TextInput>

                <Text style={LoginStyle.password}>PASSWORD:</Text>
                <TextInput placeholder="**********" style={LoginStyle.tiPassword} inlineImageLeft="outline_password_black_18" inlineImagePadding={15} secureTextEntry={true}></TextInput>

                <TouchableOpacity style={LoginStyle.btnLogin} >
                    <Text style={LoginStyle.btnTextLogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={LoginStyle.btnInvited} onPress={() => goToSubmenu()}>
                    <Text style={LoginStyle.btnTextInvited}>Invited</Text>
                </TouchableOpacity>

                <Text style={LoginStyle.fText}>Can´t Login?</Text>

                <TouchableOpacity style={LoginStyle.btnGoToRegister} onPress={() => goToRegister()}>
                    <Text style={LoginStyle.textGoToRegister}>Forgot Password!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen