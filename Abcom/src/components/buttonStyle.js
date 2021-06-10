import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {FONTS, SIZE} from '../constants'

export default function buttonStyle({label,color,backgroundColor,disabled, onPress}) {
    const style = {
        backgroundColor:backgroundColor
    }
    return (
        <TouchableOpacity style={[styles.btnLogin,style]} disabled={disabled} onPress={onPress}>
            <Text style={{color:color, ...FONTS.body3}}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnLogin:{
        paddingHorizontal: 30,
        width: SIZE.width*0.8,
        paddingVertical: 10,
        justifyContent:'center',
        alignItems:'center',
        top: 16,
        borderRadius: 8
     
    }
})