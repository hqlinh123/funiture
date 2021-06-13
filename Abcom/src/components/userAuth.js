import React from 'react'
import { View, Text,LogBox, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { IMAGES, SIZE, FONTS, COLORS } from '../constants'
import { InputField, ButtonStyle, SocialAuth, ImageBg,HeaderBar } from '../components'
import * as Animatable from 'react-native-animatable';

LogBox.ignoreLogs(['Sending...']);
function userAuth({
    dontAccountTitle,onNext, txtRegisterNow,isSignIn, navigation,usageTitle, 
    titleBtnForgotPass, backSignIn,placeholder, isSignup,title,subTitle,txtPolicyUsage,
    txtBtnPolicy,txtForMe,onSignal,onChange }) {

    function renderImageBG() {
        return (
            <ImageBg />
        )
    }
    
    function renderTextView() {
        return (
            <View style={styles.viewText}>
                <View style={styles.viewWelcome}>
                    <Text style={{ ...FONTS.body2, color: COLORS.darkblue, left: 20 }}>{title}</Text>
                    <Text style={{ ...FONTS.body5, color: COLORS.grey, left: 20 }}>{subTitle}</Text>
                </View>
                <View style={styles.viewLogo}>
                    <Image source={IMAGES.logoApp} style={{ width: 60, height: 60 }} />
                </View>
            </View>
        )
    }
    function renderForm() {
        return (
            <View style={styles.viewInput}>
                {renderInputField()}
                {renderOtherView()}
            </View>
        )
    }
    function renderInputField() {
        return (
            <>
                <InputField placeholder="Nhập SĐT của bạn" keyboardType='phone-pad' onChange={onChange}/>
                <InputField placeholder={placeholder} />
                <ButtonStyle
                    label={title}
                    backgroundColor="red"
                    color={COLORS.primary}
                    disabled={false}
                    onPress={onSignal}
                />
            </>
        )
    }
    function renderOtherView() {
        return (
            <>
                {isSignIn && renderForgotPassword()}
                {isSignup && renderPolicyView()}
                <View style={styles.viewAnother} >
                    <Text>{usageTitle}</Text>
                    <SocialAuth navigation={navigation} />
                </View>
                <View style={styles.viewSigup}>
                    <Text>{dontAccountTitle}</Text>
                    <TouchableOpacity style={styles.btnSignup} onPress={onNext}>
                        <Text style={{ ...FONTS.body5, color: COLORS.blue, textDecorationLine: 'underline' }}>{txtRegisterNow}</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
    function renderHeader(){
        return(
            <View style={{ position: 'absolute', top: 40 }}>
                <HeaderBar isSignup={true} backSignIn = {backSignIn}/>
            </View>
        )
    }
    function renderPolicyView(){
        return(
            <Text style={{marginTop:20,}}>
            {txtPolicyUsage} 
                <TouchableOpacity>
                    <Text style={{color:'red', top: 3,right:3}}>{txtBtnPolicy}</Text>
                </TouchableOpacity>
             <Text>{txtForMe}</Text>
        </Text>

        )
    }
    function renderForgotPassword(){
        return(
            <ButtonStyle label={titleBtnForgotPass} backgroundColor={COLORS.primary} color={COLORS.secondary} />
        )
    }
    return (
        <>
            {renderImageBG()}
            <View style={styles.viewLogin} >
                <Animatable.View duration={2000} animation="fadeInDown" style={styles.viewContent}>
                    {renderTextView()}
                    {renderForm()}
                </Animatable.View>
            </View>
            {isSignup && renderHeader()}
        </>
    )
}

const styles = StyleSheet.create({
    viewLogin: {
        position: 'absolute',
        width: SIZE.width,
        height: SIZE.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContent: {
        width: SIZE.width * 0.9,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingVertical: 30,
    },
    viewText: {
        flexDirection: 'row'
    },

    viewLogo: {
        position: 'absolute',
        right:0
    },
    viewInput: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',

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
export default userAuth