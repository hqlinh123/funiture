//import liraries
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Splash from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthOTP, SignIn, SignUp, Home, Setting, Account } from './src/screens'
import { ROUTE } from './src/constants';
import Tabs from './src/navigations/tabs'
import auth from '@react-native-firebase/auth';


// create a component
const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    Splash.hide()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.ROOT_STACK} component={Tabs}/>
        <Stack.Screen name={ROUTE.SIGN_IN} component={SignIn}/>
        <Stack.Screen name={ROUTE.SIGN_UP} component={SignUp}/>
        <Stack.Screen name={ROUTE.AUTH_OTP} component={AuthOTP}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
