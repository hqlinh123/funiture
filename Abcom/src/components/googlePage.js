import React,{useEffect} from 'react'
import {StyleSheet,ScrollView} from 'react-native'
import {CardView, ButtonView} from '../components'
import {useDispatch,useSelector} from 'react-redux'
import { ROUTE, TEXTS } from '../constants'

 function GooglePageAccount({navigation}) {
    const dispatch = useDispatch()
    const ggInfo = useSelector((state) => state.socialAuth.getGoogleInfo)
  
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CardView name={ggInfo.name} email={ggInfo.email} avatar={ggInfo.photo} onPress={()=>navigation.navigate(ROUTE.USER_PROFILE)}/>
            <ButtonView title={TEXTS.txtMyCard} subTitle={TEXTS.txtFastPay}/>
            <ButtonView isTitle title={TEXTS.txtMyRewars}/>
            <ButtonView top={5}/>
            <ButtonView top={5}/>
            <ButtonView isTitle title={TEXTS.txtFeatureMember} top={10}/>
            <ButtonView />
            <ButtonView title={TEXTS.txtSetting} subTitle={TEXTS.txtSubSetting} onPress={()=>navigation.navigate(ROUTE.SETTING) }/>
        </ScrollView>
     
    )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  }
})
export default GooglePageAccount
