//import liraries
import React,{useEffect} from 'react';
import {TEXTS,ROUTE} from '../constants'
import {UserAuth } from '../components'

// create a component

const SignIn = ({ navigation }) => {
    return (
            renderLoginView()
    );

    function renderLoginView(){
        return (
           <UserAuth 
            navigation={navigation} 
            title={TEXTS.titleLogin} 
            subTitle={TEXTS.subTitleLogin}
            placeholder={TEXTS.passwordSignIn}
            titleBtnForgotPass={TEXTS.txtForgotPassword}
            usageTitle={TEXTS.txtUsage}
            dontAccountTitle={TEXTS.txtDontAccount}
            txtRegisterNow={TEXTS.txtRegisterNow}
            isSignIn={true}
            onNext={() => navigation.navigate(ROUTE.SIGN_UP)}
            onSignal={() => navigation.navigate(ROUTE.ROOT_STACK, { screen: ROUTE.HOME })}
           />
        )
    }
};

export default SignIn;
