import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Transaction = (props) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={{ width: wp('23%'), height: hp('4%') }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack("MyWallet")} style={{ width: wp('8%'), height: hp('4%'), justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="md-chevron-back" size={hp('3.2%')} color='#fff' />
                            {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: wp('54%'), height: hp('4%'), alignItems: 'center' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#fff', textAlignVertical: "center" }}>Transaction History</Text>
                    </View>
                    <View style={{ width: wp('23%'), height: hp('4%'), }} />


                </View>
                <View style={{ width: wp('100%'), height: ('88%') }}>
                    <ScrollView>
                        <View style={{ width: wp('100%'), height: hp('8%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderBottomColor: '#C5D5D6', borderBottomWidth: hp('0.1%') }}>
                            <View style={{ height: hp('7%'), width: wp('55%'), justifyContent: "center", paddingLeft: wp('4%') }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'normal' }} numberOfLines={1}>Top up 3,540 BB coins</Text>
                                <Text style={{ fontSize: hp('1.7%'), color: '#939292', fontWeight: 'normal' }}>4/27/2022  22:31:50</Text>
                            </View>

                            <View style={{ height: hp('5%'), width: wp('35%'), justifyContent: "center", alignItems: 'flex-end', paddingRight: wp('2.5%') }}>
                                <Text style={{ fontSize: hp('2.2%'), color: '#939292', fontWeight: 'normal' }}>Success</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Transaction;

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