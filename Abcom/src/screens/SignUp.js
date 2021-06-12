//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES, ROUTE, SIZE } from '../constants'
import { InputField, ButtonStyle, HeaderBar, SocialAuth } from '../components'
import { Logo} from '../assets/icons'
import auth from '@react-native-firebase/auth';

// create a component
const SignUp = ({navigation}) => {
    const [phone,setPhone] = useState('')
    const [userInfo,setInfo] = useState({})

 function sendPhoneToVerify() {
    navigation.navigate(ROUTE.AUTH_OTP,{phone})
}

    function renderLoginView() {
       
        return (
       
            <View style={styles.viewLogin}>
                <View style={styles.viewContent}>
                    <View style={styles.viewText}>
                        <View style={styles.viewWelcome}>
                            <Text style={{ ...FONTS.body2, color: COLORS.darkblue, left: 20 }}>Đăng ký</Text>
                            {<Text style={{ ...FONTS.h4, color: COLORS.grey,left: 20 }}>Tạo tài khoản Javaly ngay</Text>}
                        </View>
                        <View style={styles.viewLogo}>
                            <Image source= {IMAGES.logoApp} style={{width: 60, height: 60}}/>
                        </View>
                    </View>
                    <View style={styles.viewInput}>
                        <InputField placeholder="Nhập SĐT của bạn" onChange={(txt)=> setPhone(txt)} />
                        <InputField placeholder="Tạo một mật khẩu ít nhất 5 ký tự" />
                        <ButtonStyle label="Đăng ký" backgroundColor="red"  color={COLORS.primary} disabled={false}
                         onPress={sendPhoneToVerify} />
                        <Text style={{marginTop:20,}}>
                                Bằng việc Đăng ký, bạn đã đồng ý với 
                                    <TouchableOpacity>
                                        <Text style={{color:'red', top: 3}}> Điều khoản sử dụng</Text>
                                    </TouchableOpacity>
                                 <Text> của Chợ tốt</Text>
                            </Text>
                        <View style={styles.viewAnother} >
                            <Text>hoặc sử dụng</Text>
                            <SocialAuth navigation={navigation}/>
                        </View>
                        <View style={styles.viewSigup}>
                            <Text>Bạn đã có tài khoản?</Text>
                            <TouchableOpacity style={styles.btnSignup} onPress={() => navigation.goBack()}>
                                <Text style={{ ...FONTS.body5, color: COLORS.blue, textDecorationLine:'underline'}}>Đăng nhập</Text>
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
            <View style={{position:'absolute', top: 40}}>
                <HeaderBar isSignup={true} onPress={()=> navigation.goBack()}/>
            </View>
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
        borderRadius: 20,
        backgroundColor: 'white',
        paddingVertical:50,
    },
    viewText: {
        flexDirection: 'row'
    },
    viewWelcome: {

    },
    viewLogo: {
        position: 'absolute',
        right: 10,
    },
    viewInput: {
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
        margin: 3
    },
    viewSigup: {
        flexDirection: 'row',
        top: 20
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
export default SignUp;
