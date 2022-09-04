import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Assetst/Constants/Colors';
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
const NearBy = (props) => {

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <Text>Hii</Text>

            </View>
        </SafeAreaView>
    )
}

export default NearBy;
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
