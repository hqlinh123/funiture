//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, ROUTE } from '../constants'
import { UserProfile, CartIcon, NotiIcon, Support, Back, PreviousBlack } from '../assets/icons'
// create a component

const HeaderBar = ({ isSignup, isBlackNav, onPress,bg,useInfo, navigation }) => {
    if (isSignup) {
        return <TouchableOpacity onPress={onPress} style={styles.viewWelcome}>
            <Back width={20} height={20} />
        </TouchableOpacity>
    }

    if (isBlackNav) {
        return (
            <View style={styles.viewAuth}>
                <TouchableOpacity onPress={onPress} style={styles.backAuth}>
                    <Back width={20} height={20} />
                </TouchableOpacity>
                <View style={styles.navTitle}>
                    <Text style={{...FONTS.body2, color:COLORS.primary}}>Xác thực số điện thoại </Text>
                </View>
            </View>
        )
    }
    function renderImageGg(useInfo){
        const ggImage = useInfo.user.photo ? useInfo.user.photo : null
            return(
                <Image source={{uri:ggImage, width: 40, height: 40}} style={{borderRadius: 20}}/>
            )
        
    }

    function renderFacebookImage(useInfo){
        const faceImage = useInfo.user.picture.data.url ? useInfo.user.picture.data.url : null
            return(
                <Image source={{uri:faceImage, width: 40, height: 40}} style={{borderRadius: 20}}/>
            )
       
    }
    function renderData(useInfo){
        if(useInfo.ggID == 2 ){
            return(
                renderImageGg(useInfo)
            )
        }
        if(useInfo.faceID == 1){
            return(
                renderFacebookImage(useInfo)
            )
        }
        return <UserProfile width={40} height={40}/>
           
    }
    return (

        <View style={styles.container}>
            <View style={styles.viewUser}>
                <TouchableOpacity style={styles.userBtn}>
                    {useInfo && renderData(useInfo)}
                </TouchableOpacity>
                <View style={styles.viewWelcome}>
                    <TouchableOpacity onPress={()=> navigation.navigate(ROUTE.SIGN_IN)}>
                        <Text style={{ ...FONTS.h4 }}>{useInfo.user.name ? useInfo.user.name :"Đăng nhập"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    backAuth:{position:'absolute', left:25},
    navTitle:{},
    viewAuth:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:COLORS.blue,
        top:-10
     
    },
    viewWelcome: {
        left: 25,
        top: 10
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