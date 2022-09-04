import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
//import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../Assetst/Constants/Colors';
//import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EarningCoins from '../ReusableComponent/EarningCoins';
const Earning = (props) => {

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={{ width: wp('100%'), height: hp('7%'), flexDirection: 'row', backgroundColor: '#b15eff' }}>
                    <View style={{ width: wp('12%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome5Icon name='angle-left' size={hp('3%')} color={Colors.white} />
                    </View>
                    <View style={{ width: wp('76%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: hp('2.5%'), color: Colors.white, fontWeight: 'bold' }}>Earning</Text>
                    </View>
                    <View style={{ width: wp('12%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center' }} />


                </View>


                <EarningCoins t1='Today Total Earning' time='42sec' rupees='2500' />
                <EarningCoins t1='Weekly Total Earning' time='10sec' rupees='45,000' />
                <EarningCoins t1='Total Gift Receive' time='12sec' rupees='500' />


            </View>
        </SafeAreaView>
    )
}

export default Earning;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor:'cyan'
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: '#b15eff',
        flexDirection: "row",
    },
})
