import React from 'react';
import { View, TextInput, TouchableOpacity, StatusBar, Text, ImageBackground, ScrollView } from 'react-native';
import RegisterStyle from './RegisterStyle';


const RegisterScreen = ({navigation}) => {

    const goToLogin = () => {
        navigation.navigate('login')
    }

    return (
        <View style={RegisterStyle.container}>
            <ScrollView style={RegisterStyle.scrollView}>
                <View style={RegisterStyle.inputDataContainer}>
                    <Text style={RegisterStyle.title}>Register</Text>

                    <Text style={RegisterStyle.fname}>FIRST NAME:</Text>
                    <TextInput placeholder="Jon" style={RegisterStyle.tiFName} inlineImageLeft="outline_person_add_black_18" inlineImagePadding={15}></TextInput>

                    <Text style={RegisterStyle.lname}>LAST NAME:</Text>
                    <TextInput placeholder="Snow" style={RegisterStyle.tiLName} inlineImageLeft="outline_person_add_black_18" inlineImagePadding={15}></TextInput>

                    <Text style={RegisterStyle.country}>COUNTRY:</Text>
                    <TextInput placeholder="Colombia" style={RegisterStyle.tiCountry} inlineImageLeft="outline_flag_black_18" inlineImagePadding={15}></TextInput>

                    <Text style={RegisterStyle.email}>EMAIL:</Text>
                    <TextInput placeholder="john@yahoo.es" style={RegisterStyle.tiEmail} inlineImageLeft="outline_mail_black_18" inlineImagePadding={15}></TextInput>

                    <Text style={RegisterStyle.mobile}>MOBILE:</Text>
                    <TextInput placeholder="319-543-7754" style={RegisterStyle.tiMobile} inlineImageLeft="outline_phone_android_black_18" inlineImagePadding={15}></TextInput>

                    <Text style={RegisterStyle.password}>PASSWORD:</Text>
                    <TextInput placeholder="**********" style={RegisterStyle.tiPassword} inlineImageLeft="outline_password_black_18" inlineImagePadding={15} secureTextEntry={true}></TextInput>

                    <TouchableOpacity style={RegisterStyle.btnRegister}>
                        <Text style={RegisterStyle.btnText}>Register</Text>
                    </TouchableOpacity>

                    <Text style={RegisterStyle.fText}>Already have an account?</Text>
                    
                    <TouchableOpacity style={RegisterStyle.btnGoToLogin} onPress={() => goToLogin()} >
                        <Text style={RegisterStyle.textGoToLogin}>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )

}

export default RegisterScreen