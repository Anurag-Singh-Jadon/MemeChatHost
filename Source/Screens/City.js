import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';

const City = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => props.navigation.goBack
                        ("Appointment")} style={{ width: wp('8%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('1%') }}>
                        <Ionicons name="md-chevron-back" size={hp('3.3%')} color='#ffffff' />
                        {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.8%'), color: '#ffffff', textAlignVertical: "center", paddingLeft: wp('37%') }}>City</Text>
                </View>
                <View style={{ width: wp('100%'), height: hp('8%'), justifyContent: 'center', marginTop: hp('0.5%'), alignSelf: 'center', alignItems: 'center' }}>
                    <Searchbar
                        placeholder="Search your City"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ width: wp('95%'), height: hp('7%'), backgroundColor: '#edeef0', borderColor: '#c8c9cc', borderWidth: wp('0.3%'), borderRadius: wp('3%') }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default City;
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
