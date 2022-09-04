import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import SignIn from '../Screens/SignIn';
import City from '../Screens/City';
import History from '../Screens/History';
import Delete from '../Screens/Delete';
import ProfileHost from '../Screens/ProfileHost';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};


const BottomTabNavigation = () => {


    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarInactiveTintColor: Colors.black,
                tabBarActiveTintColor: Colors.pink,
                tabBarHideOnKeyboard: true,
            }}>


            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        //display: getTabBarVisibility(route),
                        backgroundColor: '#fff'

                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Offers"
                component={History}
                options={{
                    // tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: 'blue' },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Call us"
                component={Delete}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-chatbubble-ellipses-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat boat"
                component={ProfileHost}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};





export default BottomTabNavigation;

