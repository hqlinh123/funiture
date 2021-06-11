//import liraries
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { HeaderBar } from '../components';
import { COLORS, FONTS, ROUTE, SIZE } from '../constants';
import auth from '@react-native-firebase/auth';
// create a component
const AuthOTP = ({route, navigation }) => {
    const {phone} = route.params
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const firstInput = useRef(null)
    const secondInput = useRef(null)
    const thirstInput = useRef(null)
    const forcesInput = useRef(null)
    const fineInput = useRef(null)
    const sixInput = useRef(null)

    const refCallBack = textInputRef => node => {
        textInputRef.current = node
    }

    useEffect(()=>{
        getVerifiedByPhone()
    },[])

   async function getVerifiedByPhone(){
        const confirmation = await auth().signInWithPhoneNumber(phone);
        Alert.alert(JSON.stringify(confirmation))
        setConfirm(confirmation);
    }
    async function confirmCode() {
        try {
            
         const response =  await confirm.confirm(code);
         if(response){
            navigation.navigate(ROUTE.ROOT_STACK,{response})
         }
        } catch (error) {
          console.log('Invalid code.');
        }
      }

    function renderContent() {
        return (
            <View style={styles.viewText}>
                <Text>Bạn hãy nhập mã OTP được gửi đến số điện thoại: </Text>
                   <View style={styles.viewPhone}>
                   <Text style={{...FONTS.h4}}> {phone}</Text> 
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Text style={{top:3,textDecorationLine:'underline', color: COLORS.blue}}> Đổi số khác </Text>
                    </TouchableOpacity>
                   </View>
                   <TextInput onChangeText={(text)=>setCode(text)} style={styles.input}/>
                   <TouchableOpacity onPress={confirmCode}>
                       <Text>Submid</Text>
                   </TouchableOpacity>
            </View>
        )
    }
function renderCodeField (){
    return(
       <></>
    )
}
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <HeaderBar isBlackNav={true} onPress={() => navigation.goBack()} />
            </SafeAreaView>
            {renderContent()}
            {renderCodeField()}
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blue,
    },
    viewText:{
        justifyContent:'center',
        alignItems:'center',
        top: 30
    },
    viewPhone:{
        flexDirection:'row'
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      input:{
          borderWidth: 2
      }
});

//make this component available to the app
export default AuthOTP;
