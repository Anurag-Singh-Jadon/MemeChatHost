import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import * as Animatable from 'react-native-animatable';
const Splash = (props) => {

    const AnimationRef = useRef(null);

    // const _onPress = () => {
    //     if (AnimationRef) {
    //         AnimationRef.current?.slideInDown();
    //     }
    // }

    // useEffect(() => {
    //     _onPress();
    // })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.lightPinks}
                />
                <ImageBackground source={require('../Assetst/Images/Splashscreen1.png')} style={{ width: wp('100%'), height: hp('100%'), justifyContent: 'center' }}>
                    {/* <View style={{width:wp('100%'),height:hp('6%'),justifyContent:'center', alignItems:'center', marginTop:hp('50%') }}>
                    <Text style={{color:Colors.primaryColor8 ,fontSize:hp('3%'), fontWeight:'bold',}}>meme chat</Text>
                    </View> */}
                    <TouchableOpacity style={{ width: wp('100%'), height: hp('11%'), justifyContent: 'center', alignItems: 'center', }}>
                        {/* <Image source={require('../Assetst/Images/logomemechat.png')} style={{ width: wp('15%'), height: wp('15%'), justifyContent:'center',alignItems:'center' }} /> */}
                        <Animatable.Image style={styles.logo}
                            animation="slideInUp" delay={200} duration={4000}
                            source={require('../Assetst/Images/memechatlogo.png')}

                        />
                    </TouchableOpacity>
                    <View style={{ width: wp('100%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}
                    //  onPress={_onPress}
                    >
                        <Animatable.View animation='slideInDown' delay={200} duration={4000} onAnimationEnd={() => props.navigation.navigate('Login')} >
                            {/* <Text style={{ color: Colors.primaryColor8, fontSize: hp('3%'), fontWeight: 'bold', }}>meme chat</Text> */}
                            <View style={{ width: wp('100%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>
                                <Image resizeMode='stretch' source={require('../Assetst/Images/memechat2.png')} style={{ width: wp('30%'), height: wp('12%'), }} />
                            </View>
                        </Animatable.View>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor9
    },
    logo: {
        width: hp('10%'),
        height: hp('10%'),
        // backgroundColor:'#09C6F9',
    },


})

export default Splash;