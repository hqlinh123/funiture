import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { IMAGES, SIZE, FONTS, COLORS, ROUTE } from '../constants'
import { InputField, ButtonStyle, SocialAuth, ImageBg,HeaderBar } from '../components'

function userAuth({
    dontAccountTitle,onNext, txtRegisterNow,isSignIn, navigation,usageTitle, 
    titleBtnForgotPass, backSignIn,placeholder, isSignup,title,subTitle,txtPolicyUsage,
    txtBtnPolicy,txtForMe }) {
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
                <InputField placeholder="Nhập SĐT của bạn" keyboardType='phone-pad' />
                <InputField placeholder={placeholder} />
                <ButtonStyle
                    label={title}
                    backgroundColor="red"
                    color={COLORS.primary}
                    disabled={false}
                    onPress={() => navigation.navigate(ROUTE.ROOT_STACK, { screen: ROUTE.HOME })}
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
        <View>
           
            {renderImageBG()}
            <View style={styles.viewLogin}>
                <View style={styles.viewContent}>
                    {renderTextView()}
                    {renderForm()}
                </View>
            </View>
            {isSignup && renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingVertical: 30,
    },
    viewText: {
        flexDirection: 'row'
    },
    viewWelcome: {

    },
    viewLogo: {
        position: 'absolute',
        right: 20,
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