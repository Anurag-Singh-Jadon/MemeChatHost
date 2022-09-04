import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CallingScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* <StatusBar
                    backgroundColor={Colors.lightPurples} /> */}
                <ImageBackground source={require('../Assetst/Images/Lady1.png')} style={{ width: wp('100%'), height: hp('100%'), }}>
                    <View style={{ width: wp('100%'), height: hp('12%'), justifyContent: 'center', marginTop: hp('4%'), backgroundColor: 'red' }}>
                        <View style={{ width: wp('96%'), height: hp('10%'), alignSelf: 'center', justifyContent: 'center', marginLeft: hp('1%'), backgroundColor: 'yellow' }}>
                            <Text style={{ color: 'white', fontSize: hp('2.5%'), fontWeight: 'normal' }}>Aru Rawat..., 24</Text>
                            <Text style={{ color: 'white', fontSize: hp('2.2%'), fontWeight: 'normal' }}>New Delhi</Text>
                            <Text style={{ color: 'white', fontSize: hp('2.2%'), fontWeight: 'normal' }}>Calling...</Text>
                        </View>
                    </View>





                    <View style={{ width: wp('100%'), height: hp('12%'), justifyContent: 'center', marginTop: hp('68%'), alignItems: 'center', backgroundColor: 'red' }}>
                        <View style={{ width: wp('85%'), height: hp('8%'), justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'yellow' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('WaitingForAcceptCall')} style={{ width: wp('20%'), height: hp('8%'), backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <FontAwesome name='star' size={hp('1.5%')} color='white' style={{ fontWeight: 'bold', marginLeft: hp('0.5%'), }} /> */}
                                <Image source={require('../Assetst/Images/end-call.png')} style={{ width: hp('7%'), height: hp('7%'), }} />
                            </TouchableOpacity>

                        </View>
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

export default CallingScreen;