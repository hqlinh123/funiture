//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES, ROUTE, SIZE, WEB_CLIENT_KEY } from '../constants'
import { InputField, ButtonStyle } from '../components'
import { Logo, FaceBook, Google, Apple } from '../assets/icons'
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import auth from '@react-native-firebase/auth';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'
// create a component
const SignIn = ({navigation}) => {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setInfo] = useState({})

    const getUserInfoFromToken = (token) => {
        const profile = {
            fields: {
                string: 'id,name,first_name,last_name,picture'
            }
        }
        const profileRequest = new GraphRequest('/me', { token, parameters: profile }, (error, result) => {
            if (error) {
                console.log('login has an error' + error)
            } else {
                console.log('login with name:' + result.name)
                console.log(result)
                setInfo(result)
            }
        }
        )
        new GraphRequestManager().addRequest(profileRequest).start()
    }
    const loginWithFaceBook = () => {
        LoginManager.logInWithPermissions(['public_profile'])
            .then((login) => {
                if (login.isCancelled) {
                    console.log('login is canceled')
                } else {
                    AccessToken.getCurrentAccessToken()
                        .then((data) => {
                            const accessToken = data.accessToken.toString()
                            getUserInfoFromToken(accessToken)
                        })
                }
            },
                error => {
                    console.log('login error ')
                }
            )

    }

    const logoutWithFaceBook = () => {
        LoginManager.logOut()
        setInfo({})
    }

    function renderLoginView() {
        return (
            <View style={styles.viewLogin}>
                <View style={styles.viewContent}>
                    <View style={styles.viewText}>
                        <View style={styles.viewWelcome}>
                            <Text style={{ ...FONTS.body2, color: COLORS.darkblue, top: 30, left: 20 }}>ĐĂNG NHẬP</Text>
                            {<Text style={{ ...FONTS.h4, color: COLORS.grey, top: 30, left: 20 }}>Chào {userInfo.name}  !</Text>}
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
                            <View style={styles.extends}>
                                <TouchableOpacity style={styles.btnExtends} onPress={loginWithFaceBook}>
                                    <FaceBook width={30} height={30} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExtends} onPress={signIn}>
                                    <Google width={30} height={30} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExtends}>
                                    <Apple width={30} height={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.viewSigup}>
                            <Text>Chưa có tài khoản?</Text>
                            <TouchableOpacity style={styles.btnSignup} onPress={() => props.navigation.navigate(ROUTE.SIGN_UP)}>
                                <Text style={{ ...FONTS.body5 }}>Đăng ký ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    useEffect(()=>{
        configureGoogleSignIn()
      
    },[])

   const configureGoogleSignIn = () => {
        GoogleSignin.configure({
          webClientId: WEB_CLIENT_KEY.webClientId,
          offlineAccess: false,
        });
      }
      const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setInfo(userInfo.user)
        } catch (error) {
          switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
              // sign in was cancelled
              console.log('cancelled');
              break;
            case statusCodes.IN_PROGRESS:
              // operation (eg. sign in) already in progress
              console.log('in progress');
              break;
            case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
              // android only
              console.log('play services not available or outdated');
              break;
            default:
                console.log('Something went wrong', error.toString());
              
          }
        }
      };
    
     const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          auth()
            .signOut()
            .then(() => alert('Your are signed out!'));
          setloggedIn(false);
          // setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };
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
