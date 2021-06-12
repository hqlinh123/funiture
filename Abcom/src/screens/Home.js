//import liraries
import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { HeaderBar } from '../components'
import { getFacebookProfile, getGoogleProfile } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTE, IMAGES } from '../constants';
// create a component

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const faceInfo = useSelector((state) => state.socialAuth.getFaceInfo)
    const googleInfo = useSelector((state) => state.socialAuth.getGoogleInfo)
    console.log(googleInfo)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getFacebookProfile())
            dispatch(getGoogleProfile())
            // The screen is focused
            // Call any action
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [])

    if (Object.keys(faceInfo).length > 0) {
        return (
            <>
                <SafeAreaView>
                    {
                        <HeaderBar
                            navigation={navigation}
                            userTitle={faceInfo.name}
                            userImage={faceInfo.picture.data.url}
                            userDes="Xin Chào!"
                            onPress={() => navigation.navigate(ROUTE.ACCOUNT)}
                        />
                    }
                </SafeAreaView>
            </>

        );
    }

    if (Object.keys(googleInfo).length > 0) {
        return (
            <>
                <SafeAreaView>
                    {
                        <HeaderBar
                            navigation={navigation}
                            userTitle={googleInfo.name}
                            userImage={googleInfo.photo}
                            userDes="Xin Chào!"
                            onPress={() => navigation.navigate(ROUTE.ACCOUNT)}
                        />
                    }
                </SafeAreaView>
            </>

        );
    }
    return (
        <SafeAreaView>
            {
                <HeaderBar
                    navigation={navigation}
                    userTitle="Đăng nhập"
                    onPress={() => navigation.navigate(ROUTE.SIGN_IN)}
                    userImage={IMAGES.userDefault}
                />
            }
        </SafeAreaView>

    );


};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default Home;
