import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import { Navigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const ProfileDetails = (props) => {
    const [myModal, setMyModal] = useState(false);

    const toggleMyMobile = () => {
        setMyModal(!myModal);
    };

    const [myModal1, setMyModal1] = useState(false);

    const toggleMyMobile1 = () => {
        setMyModal1(!myModal1);

    };
    const [myModal2, setMyModal2] = useState(false);

    const toggleMyMobile2 = () => {
        setMyModal2(!myModal2);
        setMyModal1(false)

    };
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor='#2C0C40' />
            <View style={styles.container}>

                <Image
                    style={styles.background}
                    source={require('../Assetst/Images/ManPhone.jpg')}
                />
                <View style={styles.head}>
                    <View style={{ width: wp('48%'), height: hp('5%'), justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()("Appointment")} style={{ width: wp('8%'), height: hp('4%'), justifyContent: "center", alignItems: "center" }}>
                            <Entypo name="circle-with-cross" size={hp('3.6%')} color='#fff' />

                        </TouchableOpacity>
                    </View>

                    <View style={{ width: wp('48%'), height: hp('5%'), justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { toggleMyMobile1(); }} style={{ width: wp('8%'), height: hp('4%'), alignSelf: 'flex-end', justifyContent: "center", alignItems: "center", }}>
                            <Entypo name="dots-three-horizontal" size={hp('3.2%')} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('9%'), justifyContent: 'center', marginTop: hp('0.5%'), flexDirection: 'row' }}>
                    <View style={{ width: wp('45%'), height: hp('8%'), alignItems: 'flex-start', padding: wp('1.5%') }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#fff', textAlignVertical: 'center', fontWeight: 'bold' }}>Ritik Singh,24</Text>
                        <Text style={{ fontSize: hp('1.8%'), color: '#fff', textAlignVertical: 'center', fontWeight: 'normal' }}>New Delhi</Text>
                    </View>
                    <View style={{ width: wp('49%'), height: hp('8%'), justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>



                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <View style={{ width: wp('38%'), height: hp('3%'), justifyContent: 'center', alignItems: 'flex-end', paddingRight: wp('1.5%') }}>
                                <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2%'), height: hp('2%'), }} />


                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: wp('65%'), height: hp('12%'), justifyContent: 'space-between', marginTop: hp('5%'), flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CallingScreen')} style={{ width: wp('30%'), height: hp('10%'), justifyContent: "center", alignItems: "center", }}>
                        <Image source={require('../Assetst/Images/Group42.png')} style={{ width: hp('7%'), height: hp('7%'), }} />
                        <Text style={{ fontSize: hp('1.5%'), color: '#fff' }}>Video Call
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { toggleMyMobile(); VideoCall(); }} style={{ width: wp('30%'), height: hp('10%'), justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../Assetst/Images/Group51.png')} style={{ width: hp('7.2%'), height: hp('7.2%'), }} />
                        <Text style={{ fontSize: hp('1.5%'), color: '#fff' }}>Chat
                        </Text>
                    </TouchableOpacity>
                </View>







            </View>
        </SafeAreaView>
    )
}

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#2C0C40'
    },
    head: {
        width: wp('100%'),
        height: hp('14%'),
        backgroundColor: 'transparent',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute'
    },
    background: {
        width: wp('100%'),
        height: hp('72%'),
        borderBottomLeftRadius: hp('5%'),
        borderBottomRightRadius: hp('5%'),
        position: 'relative'
        //  borderBottomEndRadius:wp('15%')
    },
    hin: {
        height: hp('5%'),
        width: wp('45%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('3%'),
        alignSelf: "center",
        borderColor: '#b15eff',
        marginTop: hp('2%'),


        borderWidth: hp('0.2%'),
        // borderColor:"black"
    },
    enter: {
        fontSize: hp('2%'),
        fontWeight: "bold",


    },
    ok: {
        height: hp('6%'),
        width: wp('48%'),
        backgroundColor: "#b15eff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('3%'),
        alignSelf: "center",
        borderColor: '#b15eff',
        marginTop: hp('1%'),


        borderWidth: hp('0.2%'),
        // borderColor:"black"
    },
    enter1: {
        fontSize: hp('2%'),
        fontWeight: "bold",
        color: '#fff'


    },




})