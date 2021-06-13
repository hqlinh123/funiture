import {Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

export const COLORS = {
    primary:"white",
    secondary:"black",

    aliceblue:"#f0f8ff",
    darkblue:"#00008b",
    grey:"grey",
    yellow:'#0099cc',
    blue:'#005e80'
}

export const SIZE = {
    // global style
    base: 8,
    font: 14, 
    padding: 10,
    radius: 20,
    imageW: 40,
    padding2: 12,
    // app font size 
    largeTitle : 50,
    h1:30,
    h2: 22,
    h3: 20,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    // app dimension
    width,
    height
}

export const FONTS = {
    largeTitle :{fontFamily:"Roboto-Black",fontSize: SIZE.largeTitle, lineHeight: 50},

    h1 :{fontFamily:"Roboto-Regular",fontSize: SIZE.h1, lineHeight: 36},
    h2 :{fontFamily:"Roboto-Regular",fontSize: SIZE.h2, lineHeight: 30},
    h3 :{fontFamily:"Roboto-Regular",fontSize: SIZE.h3, lineHeight: 22},
    h4 :{fontFamily:"Roboto-Bold",fontSize: SIZE.h4, lineHeight: 22},

    body1 :{fontFamily:"Roboto-Regular",fontSize: SIZE.body1, lineHeight: 36},
    body2 :{fontFamily:"Roboto-Bold",fontSize: SIZE.body2, lineHeight: 30},
    body3 :{fontFamily:"Roboto-Medium",fontSize: SIZE.body3, lineHeight: 22},
    body4 :{fontFamily:"Roboto-Regular",fontSize: SIZE.body4, lineHeight: 22},
    body5 :{fontFamily:"Roboto-Medium",fontSize: SIZE.body5, lineHeight: 22},
    
}

export const TEXTS = {
    titleLogin:"Đăng nhập",
    subTitleLogin:"Đăng nhập để nhận nhiều ưu đãi hơn",
    titleSignup:"Đăng ký",
    subTitleSignup:"Tạo mới tài khoản Abcom ngay tại đây nhé !",
    txtForgotPassword:"Bạn quên mật khẩu?",
    txtUsage:"hoặc sử dụng",
    txtDontAccount:"Chưa có tài khoản?",
    txtHaveAccount:"Bạn đã có tài khoản?",
    txtRegisterNow:"Đăng ký ngay",
    txtPolicyUsage:"Bằng việc đăng ký,bạn đã đồng ý với",
    txtBtnPolicy:"Điều khoản sử dụng",
    txtForMe:"của ABCom",
    passwordSignIn:"Nhập mật khẩu của bạn",
    passwordSignUp:"Tạo một mật khẩu ít nhất 5 ký tự"
}

const appTheme = {COLORS, SIZE, FONTS,TEXTS}

export default appTheme