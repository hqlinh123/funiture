import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getFacebookProfile, getGoogleProfile } from '../redux/actions'
import { HeaderBar, GooleAccount } from '../components'

const Account = ({ navigation }) => {
  const dispatch = useDispatch()
  const faceInfo = useSelector((state) => state.socialAuth.getFaceInfo)
  const ggInfo = useSelector((state) => state.socialAuth.getGoogleInfo)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getFacebookProfile())
      dispatch(getGoogleProfile())
    });
    return unsubscribe;
  }, []);

  if (Object.keys(faceInfo).length > 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>1</Text>
      </View>
    )
  }
  if (Object.keys(ggInfo).length > 0) {
    return (
      <>
        <SafeAreaView>
          <HeaderBar />
        </SafeAreaView>
        <GooleAccount navigation={navigation} />
      </>
    )
  }
  return (
    <SafeAreaView>
      <HeaderBar isAccount={true} useInfo={{ user: { name: "Đăng nhập" } }} />
    </SafeAreaView>
  )
}

export default Account