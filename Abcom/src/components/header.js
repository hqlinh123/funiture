//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, ROUTE,SIZE } from '../constants'
import { UserProfile, CartIcon, NotiIcon, Support, Back, PreviousBlack } from '../assets/icons'
// create a component

const HeaderBar = ({ userTitle, userImage, isSignup, userDes, navigation, onPress,backSignIn }) => {

    return (
        <View style={styles.container}>
            <View style={styles.viewUser}>
                <TouchableOpacity style={styles.userBtn}>
                    <Image source={{ uri: userImage, width: SIZE.imageW, height: SIZE.imageW }} style={{ borderRadius: SIZE.radius }} />
                </TouchableOpacity>
                <View style={styles.viewWelcome}>
                    <TouchableOpacity onPress={onPress}>
                        <Text>{userDes}</Text>
                        <Text style={{ ...FONTS.h4 }}>{userTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {renderNavIcon(isSignup)}
        </View>
    )
    function renderNavIcon(isSignup) {
        if (isSignup) {
            return (
                <TouchableOpacity onPress={backSignIn}>
                    <Back width={20} height={20} />
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.viewIcon}>
                <TouchableOpacity style={styles.cartBtn}>
                    <CartIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notiBtn}>
                    <NotiIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.support}>
                    <Support width={30} height={30} />
                </TouchableOpacity>
            </View>
        )
    }
};

// define your styles
const styles = StyleSheet.create({
    backAuth: { position: 'absolute', left: 25 },
    navTitle: {},
    viewAuth: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.blue,
        top: -10

    },
    viewWelcome: {
        left: 25,
    },
    viewUser: { flexDirection: 'row' },
    userBtn: { left: 16 },
    cartBtn: { right: 15 },
    notiBtn: { right: 10 },
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
    support: {
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