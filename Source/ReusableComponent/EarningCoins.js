import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Assetst/Constants/Colors';
const EarningCoins = (props) => {

    return (
        <View style={{ width: wp('100%'), height: hp('15%'), marginTop: hp('1%') }}>
            <View style={{ width: wp('95%'), height: hp('5%'), alignSelf: 'center', justifyContent: 'center', padding: wp('1%') }}>
                <Text style={{ fontSize: hp('2%'), color: Colors.black }}>{props.t1}</Text>
            </View>
            <View style={{
                width: wp('95%'), height: hp('10%'), alignSelf: 'center', borderRadius: hp('1%'), flexDirection: 'row', backgroundColor: Colors.white,
                shadowColor: "#000", shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <View style={{ width: wp('47.5%'), height: hp('10%'), justifyContent: 'center', paddingHorizontal: wp('1.5%') }}>
                    <Text style={{ fontSize: hp('2%'), color: Colors.black }}>Coins</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.3%'), height: hp('2.3%'), borderRadius: hp('.1%'), }} />
                        <Text style={{ fontSize: hp('2%'), marginLeft: wp('1%'), color: '#b15eff' }}>{props.rupees}</Text>
                    </View>
                </View>
                <View style={{ width: wp('47.5%'), height: hp('10%'), justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: wp('1.5%') }}>
                    <Text style={{ fontSize: hp('2%'), color: Colors.black }}>Avg.Call Time</Text>

                    <Text style={{ fontSize: hp('2%'), color: '#b15eff', marginRight: wp('12%') }}>{props.time}</Text>

                </View>
            </View>
        </View>
    )
}


export default EarningCoins;