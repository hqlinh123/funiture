import React, { Component } from 'react'
import { Image,StyleSheet } from 'react-native'
import {IMAGES,SIZE} from '../constants'

function ImageBg() {
        return (
            <Image source={IMAGES.signIn} style={styles.imgBg} />
        )
}

const styles = StyleSheet.create({
    imgBg: {
        width: SIZE.width,
        height: SIZE.height
    },
    
});

export default ImageBg
