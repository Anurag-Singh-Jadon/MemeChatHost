import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const Delete = () => {
    const [checked, setChecked] = React.useState('');
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => props.navigation.goBack
                        ("Appointment")} style={{ width: wp('8%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('1%') }}>
                        <Ionicons name="md-chevron-back" size={hp('3.2%')} color='#ffffff' />
                        {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#ffffff', textAlignVertical: "center", paddingLeft: wp('27%') }}>Delete Account</Text>
                </View>
                <View style={{ height: hp('12%'), width: wp('95%'), padding: wp('2.2%'), marginTop: hp('1.2%'), alignSelf: 'center' }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.8%'), color: '#000', }}>Delete Your Account</Text>
                    <Text style={{ fontFamily: "Roboto-Normal", fontSize: hp('1.9%'), color: '#929394', marginTop: hp('1%') }} >If you want to permanently delete your Memechat Acoount, let us know.</Text>

                </View>


                <View style={{ height: hp('17%'), width: wp('95%'), marginTop: hp('1.8%'), alignSelf: 'center', borderRadius: hp('1.5%'), borderWidth: hp('0.2%'), borderColor: '#c0c2c4' }}>
                    <View style={{ flexDirection: 'row', width: wp('90%'), height: hp('4%'), alignSelf: 'center', marginTop: hp('1.8%') }}>

                        <View style={{ width: wp('9%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center' }}>

                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}

                            />
                        </View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.8%'), color: '#000', textAlignVertical: 'center', marginLeft: wp('1%') }}>Delete Account</Text>
                    </View>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#929394', textAlignVertical: 'center', marginLeft: wp('12.5%') }}>This is permanent.</Text>
                    <Text style={{ fontFamily: "Roboto-Normal", fontSize: hp('1.9%'), color: '#000', textAlignVertical: 'center', marginLeft: wp('12.5%') }} numberOfLines={1}>When you delete your account, you won't be able to</Text>
                    <Text style={{ fontFamily: "Roboto-Normal", fontSize: hp('1.9%'), color: '#000', textAlignVertical: 'center', marginLeft: wp('12.5%') }} numberOfLines={1}>retrieve your data or your account.</Text>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Delete;

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