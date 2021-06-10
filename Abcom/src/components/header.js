//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { FONTS } from '../constants'
import {UserProfile, CartIcon, NotiIcon, Support} from '../assets/icons'
// create a component
const HeaderBar = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.viewUser}>
                    <TouchableOpacity style={styles.userBtn}>
                        <UserProfile width={40} height={40} />
                    </TouchableOpacity>
                    <View style={styles.viewWelcome}>
                        <Text style={{...FONTS.h4}}>Xin chao !</Text>
                        <Text style={{...FONTS.body5}}>Hoang Linh</Text>
                    </View>
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity style={styles.cartBtn}>
                        <CartIcon width={24} height={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notiBtn}>
                        <NotiIcon width={24} height={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.support}>
                        <Support width={30} height={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    viewWelcome:{
        left: 25,
    },
    viewUser:{flexDirection: 'row'},
    userBtn: {left: 16},
    cartBtn: {right: 15},
    notiBtn: {right: 10},
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ffff'
    },
    support:{
        top: -5
    },
    cartIcon: {
        width: 25, height: 25,
        paddingRight: 10
    },
    notiIcon: {
        width: 25, height: 25
    },
    viewIcon: {
        flexDirection: 'row',
        right: 10,
        marginLeft: 10
    }

});

//make this component available to the app
export default HeaderBar;