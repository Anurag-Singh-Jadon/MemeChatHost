import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoginWithPhone = ({ navigation }) => {


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.lightPurples} />
                <View style={{ width: wp('100%'), height: hp('6%'), justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: wp('5%'), height: hp('5%'), justifyContent: 'center', marginLeft: hp('1.3%') }}>
                        <FontAwesome5 name='chevron-left' size={hp('3%')} color='black' />
                    </TouchableOpacity>
                </View>
                <View style={{ width: wp('100%'), height: hp('34%'), alignSelf: 'center', }}>
                    <View style={{ width: wp('95%'), height: hp('5%'), alignSelf: 'center', justifyContent: 'center', marginTop: hp('0.5%') }}>
                        <Text style={{ color: 'black', fontSize: hp('2.2%'), fontWeight: 'bold', }}>Login with Phone no.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: wp('95%'), height: hp('7%'), marginTop: hp('1%'), justifyContent: 'center', alignSelf: 'center', }}>
                        <View style={{ width: wp('15%'), height: hp('7%'), backgroundColor: Colors.primaryGrayLight, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: hp('1%'), borderBottomLeftRadius: hp('1%') }}>
                            <Text style={{ color: 'black', fontSize: hp('2.2%'), fontWeight: 'bold', }}>IN +91</Text>
                        </View>
                        <TextInput
                            placeholder='Phone number'
                            placeholderTextColor={Colors.primaryGray}
                            style={{ fontSize: hp('2.2%'), width: wp('80%'), backgroundColor: Colors.primaryGrayLight, height: hp('7%'), borderTopRightRadius: hp('1%'), borderBottomRightRadius: hp('1%') }}
                            maxLength={10}
                        // keyboardType='email-address'
                        // onChangeText={handleChange('email')}
                        // onBlur={handleBlur('email')}

                        // value={values.email}

                        />
                    </View>

                    <View style={{ width: wp('95%'), height: hp('7%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%'), borderRadius: hp('1%') }}>
                        <TextInput
                            placeholder='Enter Verification code'
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
                        <TouchableOpacity style={{ width: wp('14%'), height: hp('3.8%'), backgroundColor: Colors.lightPurples, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%'), marginRight: hp('1%') }}>
                            <Text style={{ fontSize: hp('1.8%'), alignSelf: 'center', color: 'white' }}>send</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ width: wp('90%'), height: hp('7%'), backgroundColor: Colors.lightPurples, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginTop: hp('5%') }}   >
                        <Text style={{ fontSize: hp('2%'), alignSelf: 'center', color: 'white' }}>Login</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),

        // backgroundColor: Colors.primaryColor9    
    },

})

export default LoginWithPhone;