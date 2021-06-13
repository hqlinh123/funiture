//import liraries
import React, { useState } from 'react';
import { ROUTE,TEXTS} from '../constants'
import { UserAuth } from '../components'

// create a component
const SignUp = ({ navigation }) => {
    const [phone, setPhone] = useState('')
    
    function sendPhoneToVerify() {
        navigation.navigate(ROUTE.AUTH_OTP, { phone })
    }

    function renderSignupView() {
        return (
            <UserAuth
                navigation={navigation}
                isSignup={true}
                backSignIn={() => navigation.navigate(ROUTE.SIGN_IN)}
                title={TEXTS.titleSignup}
                subTitle={TEXTS.subTitleSignup}
                placeholder={TEXTS.passwordSignUp}
                dontAccountTitle={TEXTS.txtHaveAccount}
                txtRegisterNow={TEXTS.titleLogin}
                usageTitle={TEXTS.txtUsage}
                onNext={() => navigation.navigate(ROUTE.SIGN_IN)}
                txtBtnPolicy={TEXTS.txtBtnPolicy}
                txtPolicyUsage={TEXTS.txtPolicyUsage}
                txtForMe={TEXTS.txtForMe}
            />
        )
    }

    return (
            renderSignupView()
    );

};

export default SignUp;
