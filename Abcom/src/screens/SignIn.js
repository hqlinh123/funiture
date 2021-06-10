//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES, SIZE } from '../constants'
import { InputField, ButtonStyle } from '../components'
import { Logo, FaceBook, Google, Apple } from '../assets/icons'
// create a component
const SignIn = () => {
    function renderLoginView() {
        return (
            <View style={styles.viewLogin}>
                <View style={styles.viewContent}>
                    <View style={styles.viewText}>
                        <View style={styles.viewWelcome}>
                            <Text style={{ ...FONTS.body2, color: COLORS.darkblue, top: 30, left: 20 }}>ĐĂNG NHẬP</Text>
                            <Text style={{ ...FONTS.h4, color: COLORS.grey, top: 30, left: 20 }}>Chào bạn quay lại</Text>
                        </View>
                        <View style={styles.viewLogo}>
                            <Logo />
                        </View>
                    </View>
                    <View style={styles.viewInput}>
                        <InputField placeholder="Nhập SĐT của bạn" />
                        <InputField placeholder="Nhập mật khẩu của bạn" />
                        <ButtonStyle label="Đăng nhập" backgroundColor="red" color={COLORS.primary} />
                        <ButtonStyle label="Bạn quên mật khẩu?" backgroundColor="white" color={COLORS.secondary} />
                        <View style={styles.viewAnother} >
                            <Text>hoặc sử dụng</Text>
                            <View style={styles.extends}>
                                <TouchableOpacity style={styles.btnExtends}>
                                    <FaceBook width={30} height={30} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExtends}>
                                    <Google width={30} height={30} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExtends}>
                                    <Apple width={30} height={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                       <View style={styles.viewSigup}>
                            <Text>Chưa có tài khoản?</Text>
                            <TouchableOpacity> 
                                    <Text>Đăng ký ngay</Text>
                                </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Image source={IMAGES.signIn} style={styles.imgBg} />
            {renderLoginView()}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
    imgBg: {
        width: SIZE.width,
        height: SIZE.height
    },
    viewLogin: {
        backgroundColor: 'black',
        position: 'absolute',
        width: SIZE.width,
        height: SIZE.height,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContent: {
        width: SIZE.width * 0.9,
        height: SIZE.height * 0.5,
        borderRadius: 20,
        backgroundColor: 'white',

    },
    viewText: {
        flexDirection: 'row'
    },
    viewWelcome: {

    },
    viewLogo: {
        position: 'absolute',
        right: 10,
        top: 20
    },
    viewInput: {
        top: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogin: {
        bottom: 0,
    },
    viewAnother: {
        top: 8
    },
    extends: {
        flexDirection: 'row',
        top: 5
    },
    viewSigup:{
        flexDirection:'row'
    },
    btnExtends:{
        width: 45,
        height: 45
    }
});

//make this component available to the app
export default SignIn;
