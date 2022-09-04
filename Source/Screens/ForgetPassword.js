import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'


const ForgetHost = (props) => {
    const [text, onChangeText] = React.useState("");
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.forget}>Forgot</Text>
                    <Text style={styles.forget}>Password?</Text>

                </View>
                <Text style={styles.account} numberOfLines={1}>Please enter the address associated with your account.</Text>

                <TextInput style={styles.email}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Email ID/Mobile number"
                />

                <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: hp('1.5%') }}>
                    <TouchableOpacity style={{ width: wp('90%'), height: hp('7.4%'), backgroundColor: "white", borderRadius: hp('2%'), backgroundColor: '#b15eff', alignItems: "center", justifyContent: "center" }} onPress={() => props.navigation.navigate('ResetPassword')}  >
                        <Text style={{ color: '#ffffff', fontFamily: "Roboto-Bold", fontSize: hp('2.2%') }}>Submit</Text>

                    </TouchableOpacity>
                </View>

                <Image source={require('../Assetst/Images/Mobilegirl.png')} style={{ width: hp('30%'), height: hp('40%'), alignSelf: 'center', marginTop: wp('20%') }} />


            </View>
        </SafeAreaView>
    )
}
export default ForgetHost;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#fff'
    },
    head: {
        width: wp('90%'),
        height: hp('14%'),
        backgroundColor: '#fff',
        marginTop: hp('5.5%'),
        paddingLeft: wp('0.5%'),
        alignSelf: 'center'
        // alignItems:'flex-start',
        // justifyContent:'flex-start'

    },
    forget: {
        fontWeight: 'bold',
        fontSize: hp('5%'),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#000'
    },
    account: {
        fontWeight: 'normal',
        fontSize: hp('2%'),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#A9ACAA',
        paddingLeft: wp('5.5%')
    },
    email: {
        height: hp('7%'),
        width: wp('90%'),
        marginTop: hp('4%'),
        borderWidth: wp('0.3%'),
        borderRadius: wp('2%'),
        alignSelf: 'center',
        borderColor: '#A9ACAA',
        paddingLeft: wp("5%"),
        // backgroundColor:'pink'

    }
})