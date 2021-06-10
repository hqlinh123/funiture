import React, { FC } from 'react'
import { Home, Search, Bag, Setting, Account, ShopingCart } from '../screens'
import { FONTS, SIZE, COLORS, ROUTE, icons } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { House, HouseBlack, Find, FindBlack, Heart, HeartBlack, Settings, SettingBlack, Accounts, AccountBlack } from '../assets/icons'
const Tab = createBottomTabNavigator()

const Tabs = (props) => {
    return (
        <Tab.Navigator tabBarOptions=
            {{
                showLabel: false,
                style: styles.tabStyle
            }}
        >
            <Tab.Screen name={ROUTE.HOME} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <HouseBlack width={24} height={24} /> : <House width={20} height={20} />
                )
            }}
            />
            <Tab.Screen name={ROUTE.SEARCH} component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <FindBlack width={24} height={24} /> : <Find width={24} height={24} />
                )
            }} />
            <Tab.Screen name={ROUTE.BAG} component={ShopingCart} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <HeartBlack width={28} height={28} /> : <Heart width={28} height={28} />
                ),
                tabBarButton: (props) => (
                    <TabarCustomButton {...props} />
                )

            }} />

            <Tab.Screen name={ROUTE.SETTING} component={Setting} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <SettingBlack width={24} height={24} /> : <Settings width={24} height={24} />
                )
            }} />
            <Tab.Screen name={ROUTE.ACCOUNT} component={Account} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <AccountBlack width={24} height={24} /> : <Accounts width={24} height={24} />
                )
            }} />
        </Tab.Navigator>
    )
}

const TabarCustomButton = (children) => {
    return (
        <TouchableOpacity style={styles.tabCustom} onPress={children.onPress}>
            <View style={styles.tabView}>
                {children.children}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        height: 80
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabCustom: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -30
    },
    tabView: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderRadius: 35,
        backgroundColor: COLORS.aliceblue,
        shadowOpacity: 3,
        shadowRadius: 10
    }
})
export default Tabs