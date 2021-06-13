import React from 'react'
import { Text,StyleSheet, TouchableOpacity, View } from 'react-native'
import {SIZE} from '../constants'

export default function ButtonView({isTitle,title,subTitle,icon, top,onPress}) {
    const style ={
        margin: top
    }
    return (
        <View>
           {isTitle && <Text style={{marginHorizontal:10}}>{title}</Text>}
            <TouchableOpacity style={[styles.cardView,style]} onPress={onPress}>
                 <Text>{title}</Text>
                 <Text>{subTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: SIZE.width*0.96,
        backgroundColor: '#FFFF',
        borderRadius: 4,
        
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: '#000000',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 1.0
      },
})
