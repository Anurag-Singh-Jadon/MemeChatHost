
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import { RadioButton } from 'react-native-paper';
const Report = (props) => {
    const [checked, setChecked] = React.useState('first');
    // const [checked, setChecked] = React.useState('second');
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#fff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={{ width: wp('33%'), height: hp('4%') }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack("MyProfile")} style={{ width: wp('8%'), height: hp('4%'), justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="md-chevron-back" size={hp('3.2%')} color='#000' />
                            {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: wp('33%'), height: hp('4%'), alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#000', textAlignVertical: "center" }}>Report</Text>
                    </View>
                    <View style={{ width: wp('33%'), height: hp('4%'), }}>

                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: hp('2.4%'), color: '#000', textAlignVertical: "center", paddingLeft: wp('3.5%'), paddingTop: hp('2%') }}>Choose the Reason </Text>

                <View style={{ width: wp('100%'), height: hp('31%'), marginTop: hp('1.5%') }}>
                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: hp('4%'), width: wp('45%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Spam or Fraud</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), width: hp('3.6%'), height: hp('3.6%'), borderRadius: hp('3.6%') }}>

                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')} />
                        </View>

                    </View>



                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: hp('4%'), width: wp('45%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Gambling issue</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), width: hp('3.6%'), height: hp('3.6%'), borderRadius: hp('3.6%') }}>

                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')} />
                        </View>


                    </View>

                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: hp('4%'), width: wp('45%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Verbal Harassment</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), width: hp('3.6%'), height: hp('3.6%'), borderRadius: wp('3.6%') }}>

                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')} />
                        </View>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: hp('4%'), width: wp('55%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Nudity or  inappropriate</Text>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), width: hp('3.6%'), height: hp('3.6%'), borderRadius: hp('3.6%') }}>

                            <RadioButton
                                value="forth"
                                status={checked === 'forth' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('forth')} />
                        </View>
                    </View>


                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: hp('4%'), width: wp('45%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Violation of rule</Text>
                        </View>
                        <View style={{ width: hp('3.6%'), height: hp('3.6%'), alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), borderRadius: hp('3.6%') }}>

                            <RadioButton
                                value="fifth"
                                status={checked === 'fifth' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('fifth')} />
                        </View>
                    </View>



                    <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: hp('4%'), width: wp('45%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                            <Text style={{ fontSize: hp('2%'), color: '#9B999B', fontWeight: 'normal' }} numberOfLines={1}>Others</Text>
                        </View>

                        <View style={{ width: hp('3.6%'), height: hp('3.6%'), alignItems: 'center', justifyContent: 'center', marginRight: wp('2.5%'), borderRadius: hp('3.6%') }}>

                            <RadioButton
                                value="sixth"
                                status={checked === 'sixth' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('sixth')} />
                        </View>
                    </View>


                </View>

                <Text style={{ fontWeight: 'normal', fontSize: hp('2%'), color: '#9B999B', textAlignVertical: "center", paddingLeft: wp('3.5%'), paddingTop: hp('2%') }} numberOfLines={1}>Report attachment (Please upload the screenshot of chat</Text>
                <Text style={{ fontWeight: 'normal', fontSize: hp('2%'), color: '#9B999B', textAlignVertical: "center", paddingLeft: wp('3%') }} numberOfLines={1}> content or record video evidence.)  </Text>
                <View style={{ width: wp('100%'), height: hp('17%'), paddingLeft: wp('3.2%'), justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: wp('22%'), height: hp('12%'), backgroundColor: '#C3C0C3', borderRadius: wp('2%'), justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Entypo name="plus" size={hp('10%')} color='#9B999B' />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: hp('12.5%'), }}>
                    <TouchableOpacity style={{ width: wp('85%'), height: hp('7.4%'), backgroundColor: "white", borderRadius: hp('2%'), backgroundColor: '#b15eff', alignItems: "center", justifyContent: "center" }} onPress={() => props.navigation.navigate("BottomTabNavigation")}>
                        <Text style={{ color: '#ffffff', fontFamily: "Roboto-Bold", fontSize: hp('2.2%') }}>Submit</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Report;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor:'cyan'
    },
    head: {
        width: wp('100%'),
        height: hp('9%'),
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#C5D5D6',
        borderBottomWidth: hp('0.1%'),
        elevation: 10,
    },
})

