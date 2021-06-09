//import liraries
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Splash from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './src/screens'
import {ROUTE} from './src/constants';
import Tabs from './src/navigations/tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// create a component
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(()=>{
    Splash.hide()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTE.HOME} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
