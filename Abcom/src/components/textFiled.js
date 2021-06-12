import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SIZE } from '../constants';

// create a component
const InputField = ({placeholder,onChange, keyboardType}) => {
    return (
        <View style={styles.container}>
            <TextInput keyboardType = {keyboardType} style={styles.txtField} placeholder={placeholder} onChangeText={onChange}/>
            <TouchableOpacity style={styles.searchBtn}>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    txtField: {
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingHorizontal:5,
        paddingVertical: 10,
        width: SIZE.width*0.8,
        marginTop: 15,

    },
    searchIcon: {
        width: 20, height: 22
    },
    searchBtn: {
        position: 'absolute',
        top: 8,
        left: 8
    }
});

//make this component available to the app
export default InputField;