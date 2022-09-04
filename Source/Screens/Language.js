import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Language = (props) => {
    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const English = () => {
        setColor(true)
        setMyColor(false)

    }
    const Hindi = () => {
        setMyColor(true)
        setColor(false)

    }

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
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), color: '#ffffff', textAlignVertical: "center", paddingLeft: wp('31%') }}>Language</Text>
                </View>

                <View style={{ width: wp('80%'), height: hp('8%'), justifyContent: 'center', marginTop: hp('1.5%'), alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.8%'), color: '#000000' }}>Please select app Language</Text>
                </View>
                <View style={{ width: wp('95%'), height: hp('12%'), justifyContent: 'center', marginTop: hp('1.5%'), alignSelf: 'center' }}>
                    <View style={{ width: wp('95%'), height: hp('9%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={English}
                            style={{ backgroundColor: color ? '#b15eff' : "white", width: wp('43%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), borderWidth: wp('0.4%'), borderColor: '#b15eff' }} >
                            <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('2%'), color: color ? "white" : '#b15eff' }}>English</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={Hindi}

                            style={{ backgroundColor: myColor ? '#b15eff' : "white", width: wp('43%'), height: hp('8%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), borderWidth: wp('0.4%'), borderColor: '#b15eff' }}>
                            <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('2%'), color: myColor ? "white" : '#b15eff' }}>हिंदी</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Language;

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
