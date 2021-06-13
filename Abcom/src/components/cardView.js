//import liraries
import React from 'react';
import { StyleSheet,TouchableOpacity,Text,Image, View} from 'react-native';
import {SIZE,IMAGES, FONTS, COLORS} from '../constants'
// create a component
function CardView ({name, email, avatar, onPress}){

    function renderAccountView(){
        return(
            <View style={styles.userView}>
                <Image source={{uri:avatar, width: 50, height: 50}} style={styles.avatar}/>
                <View style={styles.userInfo}>
                    <Text style={{...FONTS.h4}}>{name}</Text>
                    <Text style={{...FONTS.h4, color: COLORS.grey}}>{email}</Text>
                
                        <Text style={{...FONTS.h4, color:COLORS.blue}}>Xem trang cá nhân</Text>
                
                </View>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.cardView} onPress={onPress}>
           {renderAccountView()}
        </TouchableOpacity>
         
    );
};

// define your styles
const styles = StyleSheet.create({
    cardView: {
        width: SIZE.width*0.96,
        backgroundColor: '#FFFF',
        borderRadius: 5,
        margin:5,
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: '#000000',
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 1.0
      },
      avatar:{
          borderRadius: SIZE.radius1
      },
      userView:{
          flexDirection:'row',
      },
      userInfo:{
        marginLeft: 16,
      }
});

//make this component available to the app
export default CardView;
