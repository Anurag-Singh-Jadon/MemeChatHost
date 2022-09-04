import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
//import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const Login = (props) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.lightPurples} />
                <ImageBackground source={require('../Assetst/Images/Splashscreen–2.png')} style={{ width: wp('100%'), height: hp('100%'), }}>

                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'center', marginTop: hp('26%') }}>
                        <View style={{ width: wp('25%'), height: hp('11%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>
                            <Image source={require('../Assetst/Images/memechatlogo.png')} style={{ width: hp('8%'), height: hp('8%'), }} />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>
                            <Image resizeMode='stretch' source={require('../Assetst/Images/memechat.png')} style={{ width: wp('30%'), height: wp('12%'), }} />
                        </View>
                        {/* <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'center', alignItems: 'center',  }}>
                            <Text style={{ color: Colors.lightPinks, fontSize: hp('3%'), fontWeight: 'bold', }}>meme chat</Text>
                        </View> */}
                    </View>

                    <View style={{ width: wp('100%'), height: hp('5%'), marginTop: hp('1%'), justifyContent: 'center', }}>
                        <View style={{ width: wp('96%'), height: hp('4%'), justifyContent: 'center', alignSelf: 'center', padding: wp('0.5%') }}>
                            <Text style={{ color: 'black', fontSize: hp('2.5%'), fontWeight: 'bold' }}>Login</Text>
                        </View>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('3%'), marginTop: hp('0.2%'), justifyContent: 'center', }}>
                        <View style={{ width: wp('96%'), height: hp('2.8%'), justifyContent: 'center', alignSelf: 'center', padding: wp('0.5%') }}>
                            <Text style={{ color: Colors.primaryGray, fontSize: hp('1.8%'), fontWeight: 'bold' }}>meme ID</Text>
                        </View>
                    </View>

                    <View style={{ width: wp('96%'), height: hp('7%'), alignSelf: 'center', backgroundColor: 'white', justifyContent: 'center', marginTop: hp('0.5%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: Colors.primaryGrayLight, }}>
                        <TextInput
                            placeholder=''
                            placeholderTextColor={Colors.primaryGray}
                            style={{ fontSize: hp('1.8%'), width: wp('75%'), marginLeft: hp('1%'), height: hp('7%'), }}
                        // keyboardType='email-address'
                        // onChangeText={handleChange('email')}
                        // onBlur={handleBlur('email')}

                        // value={values.email}

                        />
                        {/* {emailOtp ?
                            <View style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>
                                <AntDesign name='checkcircle' color={'green'} size={hp('2%')} style={{ alignSelf: 'center', }} />
                            </View>
                            : */}
                        {/* <TouchableOpacity style={{ width: wp('14%'), height: hp('3.8%'), backgroundColor: Colors.lightPurples, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%'), marginRight: hp('1%') }}>
                            <Text style={{ fontSize: hp('1.8%'), alignSelf: 'center', color: 'white' }}>send</Text>
                        </TouchableOpacity> */}
                    </View>

                    <View style={{ width: wp('100%'), height: hp('3%'), marginTop: hp('1%'), justifyContent: 'center', }}>
                        <View style={{ width: wp('96%'), height: hp('2.8%'), justifyContent: 'center', alignSelf: 'center', padding: wp('0.5%') }}>
                            <Text style={{ color: Colors.primaryGray, fontSize: hp('1.8%'), fontWeight: 'bold' }}>password</Text>
                        </View>
                    </View>

                    <View style={{ width: wp('96%'), height: hp('7%'), alignSelf: 'center', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', marginTop: hp('1%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: Colors.primaryGrayLight, }}>
                        <TextInput
                            placeholder=''
                            placeholderTextColor={Colors.primaryGray}
                            style={{ fontSize: hp('1.8%'), width: wp('75%'), marginLeft: hp('1%'), height: hp('7%'), }}
                        // keyboardType='email-address'
                        // onChangeText={handleChange('email')}
                        // onBlur={handleBlur('email')}

                        // value={values.email}

                        />
                        {/* {emailOtp ?
                            <View style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>
                                <AntDesign name='checkcircle' color={'green'} size={hp('2%')} style={{ alignSelf: 'center', }} />
                            </View>
                            : */}
                        <TouchableOpacity style={{ width: wp('14%'), height: hp('3.8%'), alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%'), alignItems: 'center', marginRight: hp('1%') }}>
                            {/* <Text style={{ fontSize: hp('1.8%'), alignSelf: 'center', color: 'white' }}>send</Text> */}
                            <Feather name='eye' size={hp('3%')} color='black' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: wp('96%'), height: hp('3%'), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', borderRadius: hp('0.5%'), alignItems: 'center', marginTop: hp('0.2%') }}>
                        <View style={{ width: wp('66%'), alignSelf: 'center', height: hp('3%'), justifyContent: 'center', alignItems: 'center', }}></View>
                        <TouchableOpacity style={{ width: wp('30%'), height: hp('3%'), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }} onPress={() => props.navigation.navigate('ForgetPassword')} >
                            <Text style={{ fontSize: hp('1.8%'), alignSelf: 'center', color: Colors.lightPurples, }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ width: wp('96%'), height: hp('7%'), backgroundColor: Colors.lightPurples, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginTop: hp('5%') }} onPress={() => props.navigation.navigate('BottomTabNavigation')} >
                        <Text style={{ fontSize: hp('2%'), alignSelf: 'center', color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ width: wp('96%'), height: hp('5%'), marginTop: hp('0.5%'), justifyContent: 'center', alignSelf: 'center', padding: wp('0.5%') }}>
                        <Text style={{ fontSize: hp('1.6%'), color: 'black' }}>By signing up, you agree to our<Text style={{ fontSize: hp('1.6%'), color: Colors.lightPinks, textDecorationLine: 'underline' }}>Privacy Policy.<Text style={{ fontSize: hp('1.6%'), color: 'black' }}> and <Text style={{ fontSize: hp('1.6%'), color: Colors.lightPinks, textDecorationLine: 'underline' }}>Terms of Service</Text></Text></Text> </Text>
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

        // backgroundColor: Colors.primaryColor9    w
    },

})

export default Login;