import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IMAGES, SIZE } from '../constants'
import * as Animatable from 'react-native-animatable';

function ImageBg() {
    return (
        <Animatable.View style={styles.container} duration={2000} animation="fadeInUp">
             <Image source={IMAGES.signIn} style={styles.imgBg} />
        </Animatable.View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZE.width,
        height: SIZE.height,
        backgroundColor: 'black',
        opacity:0.8
        
    },
    imgBg:{
        width: SIZE.width,
        height: SIZE.height,
    }

});

export default ImageBg
