//import liraries
import React, { useEffect,useState } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import {FaceBook, Google, Apple } from '../assets/icons'
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'
import {WEB_CLIENT_KEY, ROUTE} from '../constants'
import {useDispatch} from 'react-redux'
import {saveFacebookProfile, saveGoogleProfile} from '../redux/actions'

// create a component
const SocialAuth = ({navigation}) => {
    const dispatch = useDispatch()
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
                    dispatch(saveFacebookProfile(result))
                    navigation.navigate(ROUTE.ROOT_STACK, {screen:ROUTE.HOME})
            }
        }
        )
        new GraphRequestManager().addRequest(profileRequest).start()
    }

    const signInWithFaceBook = () => {
        LoginManager.logInWithPermissions(['public_profile'])
            .then((login) => {
                if (login.isCancelled) {
                    console.log('login facebook is canceled')
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
    
    useEffect(()=>{
        configureGoogleSignIn()
      
    },[])

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
          webClientId: WEB_CLIENT_KEY.webClientId,
          offlineAccess: false,
        });
      }
      const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
           if(userInfo.idToken !== null){
               dispatch(saveGoogleProfile(userInfo.user))
               navigation.navigate(ROUTE.ROOT_STACK, {screen:ROUTE.HOME})
           }
        } catch (error) {
          switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
              // sign in was cancelled
              console.log('login google is cancelled');
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
    
    
      function signInWithApple() {
        const appleAuthRequestResponse = appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });
        console.log(appleAuthRequestResponse)
        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
        }
    }
    return (
    <View style={styles.extends}>
        <TouchableOpacity style={styles.btnExtends} onPress={signInWithFaceBook}>
            <FaceBook width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnExtends} onPress={signInWithGoogle}>
            <Google width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnExtends} onPress={signInWithApple}>
            <Apple width={30} height={30} />
        </TouchableOpacity>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    extends: {
        flexDirection: 'row',
        margin: 3
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
});

//make this component available to the app
export default SocialAuth;
