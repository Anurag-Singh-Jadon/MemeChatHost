import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const ProfileHost = (props) => {
    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value) => {
        setSwitchValue(value);
    };

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#ff0090' />
            <View style={styles.container}>
                <View style={styles.head}>
                    <LinearGradient
                        colors={['#ff0099', '#922ABE']}
                        style={{ height: hp('28%'), width: wp('100%') }}
                    >

                        <View style={{ width: wp('100%'), height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: hp('2.8%'), color: '#fff', textAlignVertical: "center" }}>Profile</Text>
                        </View>

                    </LinearGradient>
                </View>


                <View style={{ width: wp('100%'), height: hp('25%'), borderTopLeftRadius: wp('8%'), borderTopRightRadius: wp('8%'), marginTop: hp('-3.9%'), backgroundColor: '#fff' }}>
                    <View style={{ width: wp('40%'), height: hp('27%'), alignSelf: 'center', marginTop: hp('-10%'), alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../Assetst/Images/girl1.jpg')} style={{ width: hp('16%'), height: hp('16%'), borderRadius: hp('2%'), borderColor: '#fff', borderWidth: wp('1.2%') }} />
                        <View style={{ width: wp('38%'), height: hp('3.2%'), marginTop: hp('0.5%'), flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), color: '#000', textAlignVertical: "center" }}>Maria Ron</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("exc")} style={{ width: wp('7%'), height: hp('3%'), justifyContent: "center", alignItems: "center", }}>
                                <FontAwesome name="edit" size={hp('2.5%')} color='#000' />
                                {/* <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text> */}
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), color: '#000', textAlignVertical: "center" }}>22</Text>
                        </View>
                        <View style={{ width: wp('40%'), height: hp('3.6%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'normal', fontSize: hp('2%'), color: '#000', textAlignVertical: "center", }}>ID: 30882227</Text>
                            <TouchableOpacity>
                                <View style={{ width: wp('12%'), height: hp('3%'), borderColor: '#8D8B8B', borderRadius: hp('2%'), borderWidth: wp('0.2%'), justifyContent: 'center', alignItems: 'center', marginLeft: wp('2%') }}>
                                    <Text style={{ fontSize: hp('1.5%'), color: '#8D8B8B', textAlignVertical: 'center' }}>Copy
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: wp('82%'), height: hp('7%'), justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ width: wp('34%'), height: hp('5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8e8ff' }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', textAlignVertical: 'center' }}>Follows 2
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ width: wp('34%'), height: hp('5%'), borderColor: '#8D8B8B', borderRadius: hp('1%'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8e8ff' }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', textAlignVertical: 'center' }}>Friends 0
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('40%') }}>


                    <View style={{ width: wp('97%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>


                        <Image source={require('../Assetst/Images/Online.png')} style={{ width: hp('5%'), height: hp('5%'), marginLeft: wp('1.5%') }} />
                        <TouchableOpacity style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                            <View style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'bold' }}>Status</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ height: hp('5%'), width: wp('25%'), justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: wp('0.1%'), flexDirection: 'row', }}>

                            <Switch
                                trackColor={{ false: "#767577", true: "#12F552" }}
                                thumbColor={switchValue ? "#0EB93E" : "#f4f3f4"}
                                // backgroundActive={'blue'}
                                onValueChange={toggleSwitch}
                                value={switchValue}
                            />

                        </View>
                    </View>


                    <View style={{ width: wp('97%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>


                        <Image source={require('../Assetst/Images/Group12.png')} style={{ width: hp('5%'), height: hp('5%'), marginLeft: wp('1.5%') }} />
                        <TouchableOpacity style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }} onPress={() => props.navigation.navigate("exc")}>
                            <View style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'bold' }}>MyEarnings</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ height: hp('5%'), width: wp('25%'), justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: wp('1%'), flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: wp('25%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ height: hp('5%'), justifyContent: 'center', width: wp('25%'), alignItems: 'flex-end', flexDirection: 'row' }} onPress={() => props.navigation.navigate("Earnings")}>
                                    <View style={{ alignItems: 'center', width: wp('20%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row', }}>
                                        <Image source={require('../Assetst/Images/coins.png')} style={{ width: hp('2.5%'), height: hp('2.5%'), }} />
                                        <Text style={{ fontSize: hp('1.8%'), color: '#FDBF00', fontWeight: 'bold', marginLeft: wp('1%'), textAlignVertical: 'center' }}>250</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: wp('5%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row' }}>
                                        <Ionicons name="md-chevron-forward" size={hp('3.2%')} color='#000' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={{ width: wp('97%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={require('../Assetst/Images/Video.png')} style={{ width: hp('5%'), height: hp('5%'), marginLeft: wp('1.5%') }} />
                        <TouchableOpacity style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }} onPress={() => props.navigation.navigate("Video")}>
                            <View style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'bold' }}>Set Video Time</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={{ height: hp('5%'), width: wp('25%'), justifyContent: "center", alignItems: 'flex-end', paddingRight: wp('1%'), }}>

                            <TouchableOpacity style={{ height: hp('5%'), justifyContent: 'center', width: wp('25%'), alignItems: 'flex-end' }} onPress={() => props.navigation.navigate("Video")}>
                                <Ionicons name="md-chevron-forward" size={hp('3.2%')} color='#000' />
                            </TouchableOpacity>
                        </View>
                    </View>





                    <View style={{ width: wp('97%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={require('../Assetst/Images/Group13.png')} style={{ width: hp('5%'), height: hp('5%'), marginLeft: wp('1.5%') }} />
                        <TouchableOpacity style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }} onPress={() => props.navigation.navigate("HostSettings")}>
                            <View style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'bold' }}>Settings</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={{ height: hp('5%'), width: wp('25%'), justifyContent: "center", alignItems: 'flex-end', paddingRight: wp('1%'), }}>

                            <TouchableOpacity style={{ height: hp('5%'), justifyContent: 'center', width: wp('25%'), alignItems: 'flex-end' }} onPress={() => props.navigation.navigate("HostSettings")}>
                                <Ionicons name="md-chevron-forward" size={hp('3.2%')} color='#000' />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ width: wp('97%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={require('../Assetst/Images/Group14.png')} style={{ width: hp('5%'), height: hp('5%'), marginLeft: wp('1.5%') }} />
                        <TouchableOpacity style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }} onPress={() => props.navigation.navigate("Refer&earn")}>
                            <View style={{ height: hp('5%'), width: wp('60%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                <Text style={{ fontSize: hp('2%'), color: '#000', fontWeight: 'bold' }}>Invite & Earn</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={{ height: hp('5%'), width: wp('25%'), justifyContent: "center", alignItems: 'flex-end', paddingRight: wp('1%') }}>
                            <TouchableOpacity style={{ height: hp('5%'), justifyContent: 'center', width: wp('25%'), alignItems: 'flex-end', }} onPress={() => props.navigation.navigate("Refer&earn")}>
                                <Ionicons name="md-chevron-forward" size={hp('3.2%')} color='#000' />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default ProfileHost;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#fff'
    },
    head: {
        width: wp('100%'),
        height: hp('28%'),

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },

})