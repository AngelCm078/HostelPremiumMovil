import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/splash/screens/splash-screen/SplashScreen';
import HomepageScreen from './src/homepage/screens/homepage-screen/HomepageScreen';
import RegisterScreen  from './src/register/screens/register-screen/RegisterScreen';
import LoginScreen from './src/login/screens/login-screen/LoginScreen';
import SubMenuScreen from './src/submenu/screens/submenu-screen/SubMenuScreen';
import UsersScreen from './src/users/views/users-screen/UsersScreen';
import PropertiesScreen from './src/properties/views/properties-screen/PropertiesScreen';





const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>      
      <Stack.Navigator>        
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="homepage" component={HomepageScreen} options={{headerShown: false}} />
        <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="submenu" component={SubMenuScreen} options={{headerShown: false}}/>
        <Stack.Screen name="users" component={UsersScreen} options={{headerShown: false}}/>
        <Stack.Screen name="properties" component={PropertiesScreen} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

