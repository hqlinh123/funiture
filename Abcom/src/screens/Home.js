//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderBar} from '../components'
// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <HeaderBar />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default Home;
