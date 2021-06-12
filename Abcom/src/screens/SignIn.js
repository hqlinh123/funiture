//import liraries
import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES, ROUTE, SIZE} from '../constants'
import { InputField, ButtonStyle, SocialAuth } from '../components'
import { Logo } from '../assets/icons'

// create a component
const SignIn = ({ navigation }) => {
    function renderLoginView() {
        return (
            <View style={styles.viewLogin}>
                <View style={styles.viewContent}>
                    <View style={styles.viewText}>
                        <View style={styles.viewWelcome}>
                            <Text style={{ ...FONTS.body2, color: COLORS.darkblue, top: 30, left: 20 }}>ĐĂNG NHẬP</Text>
                        </View>
                        <View style={styles.viewLogo}>
                            <Logo />
                        </View>
                    </View>
                    <View style={styles.viewInput}>
                        <InputField placeholder="Nhập SĐT của bạn" />
                        <InputField placeholder="Nhập mật khẩu của bạn" />
                        <ButtonStyle label="Đăng nhập" backgroundColor="red" color={COLORS.primary} disabled={false} onPress={() => console.log('fsdfsdfsdfsdfsd')} />
                        <ButtonStyle label="Bạn quên mật khẩu?" backgroundColor="white" color={COLORS.secondary} />
                        <View style={styles.viewAnother} >
                            <Text>hoặc sử dụng</Text>
                           <SocialAuth navigation={navigation}/>
                        </View>
                        <View style={styles.viewSigup}>
                            <Text>Chưa có tài khoản?</Text>
                            <TouchableOpacity style={styles.btnSignup} onPress={() => navigation.navigate(ROUTE.SIGN_UP)}>
                                <Text style={{ ...FONTS.body5 }}>Đăng ký ngay</Text>
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
        top: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    extends: {
        flexDirection: 'row',
        top: 5,
        marginLeft: 6
    },
    viewSigup: {
        flexDirection: 'row',
        top: 18
    },
    btnExtends: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        shadowOpacity: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 5
    },
    btnSignup: {
        left: 8,
        top: -3
    }
});

//make this component available to the app
export default SignIn;
