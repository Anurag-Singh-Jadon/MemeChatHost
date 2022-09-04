import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Assetst/Constants/Colors';
import FaceProfile from '../ReusableComponent/FaceProfle';


const Discover = (props) => {

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={{ height: hp('63%') }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp('6%'), marginTop: hp('1%') }}>

                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men1.png')} vdocallBlur={() => props.navigation.navigate('ProfileDetails')} vdoCall={() => props.navigation.navigate('CallingScreen')} />
                            <FaceProfile t1='Kanpur' t2='Aastha...,23' img={require('../Assetst/Images/men2.png')} />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp('6%'), marginTop: hp('1%') }}>

                            <FaceProfile t1='Kolkata' t2='Archana...,26' img={require('../Assetst/Images/men3.png')} />
                            <FaceProfile t1='Mumbai' t2='Simran...,25' img={require('../Assetst/Images/men4.png')} />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp('6%'), marginTop: hp('1%') }}>

                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men5.png')} />
                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men6.png')} />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp('6%'), marginTop: hp('1%') }}>

                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men1.png')} />
                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men2.png')} />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp('6%'), marginTop: hp('1%') }}>

                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men3.png')} />
                            <FaceProfile t1='Kolapur' t2='Samuel...,24' img={require('../Assetst/Images/men4.png')} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Discover;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('75%'),


    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: '#b15eff',
        flexDirection: "row",
    },
})
