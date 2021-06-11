//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Tabs from '../navigations/tabs'
import {HeaderBar} from '../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE } from '../constants';
import {Account} from '../screens'
const Tab = createBottomTabNavigator();
// create a component

const Home = ({route, navigation}) => {
    const userInfo = route.params ? route.params : {user:{name:"Đăng nhập"}}
    return (
    <SafeAreaView>
        <HeaderBar navigation={navigation} useInfo={userInfo}/>
    </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default Home;
