//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NotiIcon, CartIcon, AccountIcon, SettingIcon,SearchIcon, HeartIcon} from '../assets/icons'
// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
           <NotiIcon height={20} width={20}/>
           <CartIcon height={20} width={20}/>
           <AccountIcon height={20} width={20}/>
           <SettingIcon height={20} width={20}/>
           <SearchIcon height={20} width={20}/>
           <HeartIcon height={20} width={20}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        margin: 20

    },
});

//make this component available to the app
export default Home;
