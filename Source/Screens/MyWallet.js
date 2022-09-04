import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const MyWallet = (props) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={{ width: wp('30%'), height: hp('4%'), }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack("ProfileDetails")} style={{ width: wp('8%'), height: hp('4%'), justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="md-chevron-back" size={hp('3.2%')} color='#fff' />
                            {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: wp('40%'), height: hp('4%'), alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#fff', textAlignVertical: "center" }}>My Wallet</Text>
                    </View>
                    <View style={{ width: wp('30%'), height: hp('4%'), }}>

                    </View>

                </View>

                <TouchableOpacity>
                    <View style={{ width: wp('97%'), height: hp('7%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), backgroundColor: '#FBF2FF' }}>

                        <View style={{ height: hp('5%'), width: wp('68%'), justifyContent: "center", paddingLeft: wp('2%'), }}>
                            <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>My coins</Text>
                        </View>


                        <View style={{ height: hp('5%'), width: wp('27%'), justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: wp('18%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%') }}>250</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ width: wp('97%'), height: hp('7%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), backgroundColor: '#FBF2FF' }}>

                        <View style={{ height: hp('5%'), width: wp('68%'), justifyContent: "center", paddingLeft: wp('2%'), }}>
                            <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>My Records</Text>
                        </View>


                        <View style={{ height: hp('5%'), width: wp('27%'), justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ alignItems: 'center', width: wp('18%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row', }} onPress={() => props.navigation.navigate("Transaction")}  >

                                <Text style={{ fontSize: hp('1.8%'), color: '#b15eff', fontWeight: 'bold', marginLeft: wp('1%') }}>View</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: hp('2.5%'), color: '#000', fontWeight: 'bold', paddingLeft: wp('2.8%'), paddingTop: hp('1.5%') }}>Recharge</Text>
                <Text style={{ fontSize: hp('1.8%'), color: '#AEABAB', fontWeight: 'bold', paddingLeft: wp('2.8%'), paddingTop: hp('0.5%') }}>Please select the way to top up</Text>
                <View style={{ width: wp('98%'), height: hp('7%'), justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: wp('1%'), paddingRight: wp('1%'), marginTop: hp('1%') }}>
                    <TouchableOpacity>
                        <View style={{ width: wp('44%'), height: hp('5.5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>
                            <Image source={require('../Assetst/Images/paytm.png')} style={{ width: hp('10%'), height: hp('3%') }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: wp('44%'), height: hp('5.5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>

                            <Image source={require('../Assetst/Images/Gpay1.png')} style={{ width: hp('8%'), height: hp('3%') }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: wp('98%'), height: hp('7%'), justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: wp('1%'), paddingRight: wp('1%') }}>
                    <TouchableOpacity>
                        <View style={{ width: wp('44%'), height: hp('5.5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>
                            <Image source={require('../Assetst/Images/upi.png')} style={{ width: hp('10%'), height: hp('2.5%') }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: wp('44%'), height: hp('5.5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>

                            <Image source={require('../Assetst/Images/Phonepay.png')} style={{ width: hp('11%'), height: hp('3%') }} />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ width: wp('100%'), height: hp('41%'), }}>
                    <ScrollView>
                        <View style={{ width: wp('98%'), height: hp('9%'), justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: wp('1%'), paddingRight: wp('1%'), marginTop: hp('0.5%') }}>
                            <TouchableOpacity>
                                <View style={{ width: wp('44%'), height: hp('8.5%'), borderColor: '#FDBF00', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>
                                    <View style={{ alignItems: 'center', width: wp('18%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                        <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%') }}>99</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>INR 99</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: wp('44%'), height: hp('8.5%'), borderColor: '#FDBF00', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>

                                    <View style={{ alignItems: 'center', width: wp('18%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                        <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%') }}>199</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>INR 199</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={{ width: wp('98%'), height: hp('9%'), justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: wp('1%'), paddingRight: wp('1%'), marginTop: hp('0.5%') }}>
                            <TouchableOpacity>
                                <View style={{ width: wp('44%'), height: hp('8.5%'), borderColor: '#FDBF00', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>
                                    <View style={{ alignItems: 'center', width: wp('18%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                        <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%') }}>99</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>INR 99</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: wp('44%'), height: hp('8.5%'), borderColor: '#FDBF00', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', borderWidth: hp('0.1%') }}>

                                    <View style={{ alignItems: 'center', width: wp('18%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                        <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%') }}>199</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('1.8%'), color: '#000', fontWeight: 'bold' }}>INR 199</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>







                <Text style={{ fontSize: hp('1.8%'), color: '#AEABAB', fontWeight: 'bold', paddingTop: hp('0.7%'), textAlign: 'center' }}>Contact us if you have any questions.</Text>

                <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: hp('0.5%') }}>
                    <Feather name="headphones" size={hp('2%')} color='#000' />
                    <Text style={{ fontSize: hp('1.8%'), color: '#21C261', fontWeight: 'bold', textAlignVertical: 'center', textDecorationColor: '#21C261', textDecorationLine: 'underline', marginLeft: wp('1%') }}>Customer Services.</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default MyWallet;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#fff'
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: '#b15eff',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
})