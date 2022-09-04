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
import Discover from '../Screens/Discover';
import NearBy from '../Screens/Nearby';
const Home = (props) => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#b15eff' />
            <View style={styles.container}>
                <View style={{ width: wp('96%'), height: hp('6%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ width: wp('10%'), height: hp('6%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate('TopWeekly')}>
                        <FontAwesome5Icon name='crown' size={hp('2%')} style={{ color: Colors.yellow }} />
                    </TouchableOpacity>
                    <View style={{ width: wp('20%'), height: hp('6%'), flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp('4%'), justifyContent: 'space-between', }}>
                        <TouchableOpacity>
                            <FontAwesome5Icon name='bell' size={hp('2.2%')} style={{ color: Colors.black }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome5Icon name='search' size={hp('2.5%')} style={{ color: Colors.black }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: wp('100%'), height: hp('12%'), alignSelf: 'center', marginTop: hp('1%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../Assetst/Images/ScrollBanner.png')}
                        style={{
                            width: wp('96%'),
                            height: hp('12%'),
                            resizeMode: 'contain',

                        }}
                    />
                </View>
                <View style={{
                    width: wp('100%'), height: hp('81%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', elevation: hp('2%'),
                    shadowColor: Colors.primaryColor4,
                }}>


                    {/* <NavigationContainer > */}
                    <Tab.Navigator
                        initialRouteName="Feed"
                        tabBarOptions={{
                            activeTintColor: '#b15eff',
                            inactiveTintColor: Colors.black,

                            labelStyle: {
                                textAlign: 'center',
                            },
                            indicatorStyle: {
                                borderBottomColor: '#fff',
                                borderBottomWidth: 2,

                            },

                        }} >
                        <Tab.Screen
                            name="Discover"
                            component={Discover}
                            options={{
                                tabBarLabel: 'Discover',
                                tabBarLabelStyle: { fontWeight: 'bold' },
                                // tabBarIcon: ({ color, size }) => (
                                //   <MaterialCommunityIcons
                                //       name="home"
                                //       color={color}
                                //       size={size}
                                //     />
                                // ),
                            }} />
                        <Tab.Screen
                            name="NearBy"
                            component={NearBy}
                            options={{
                                tabBarLabel: 'NearBy',
                                tabBarLabelStyle: { fontWeight: 'bold' },
                                // tabBarIcon: ({ color, size }) => (
                                //   <MaterialCommunityIcons
                                //       name="settings"
                                //       color={color}
                                //       size={size}
                                //     />
                                // ),
                            }} />
                    </Tab.Navigator>
                    {/* </NavigationContainer> */}
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home;
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
    },
})
