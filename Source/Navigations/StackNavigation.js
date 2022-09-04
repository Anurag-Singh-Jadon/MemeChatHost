import React from 'react';

import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import ForgetPassword from '../Screens/ForgetPassword';
import SignIn from '../Screens/SignIn';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetails from '../Screens/ProfileDetails';
import ResetPassword from '../Screens/ResetPassword';
import CallingScreen from '../Screens/CallingScreen';
import VideoCallBlur from '../Screens/VideoCallBlur';
import History from '../Screens/History';
import TopWeekly from '../Screens/TopWeekly';

//import ProfileDetails from '../Screens/ProfileDetails';
import BottomTabNavigation from './BottomTabNavigation';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (

        <Stack.Navigator initialRouteName='Splash' >


            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} options={{ headerShown: false }} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="CallingScreen" component={CallingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="VideoCallBlur" component={VideoCallBlur} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History} options={{ headerShown: false }} />

            <Stack.Screen name="TopWeekly" component={TopWeekly} options={{ headerShown: false }} />



        </Stack.Navigator>


    );
};

export default StackNavigation;
