import React, { useState, useEffect, useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import * as Animatable from 'react-native-animatable';
import Modal from "react-native-modal";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
// import DatePicker from 'react-native-date-picker'

const ProfileScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // const [date, setDate] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState('');

    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const Male = () => {
        setColor(true)
        setMyColor(false)

    }
    const Female = () => {
        setMyColor(true)
        setColor(false)

    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const TakePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: wp('30%'),
            height: hp('15%'),
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
            if (image) {
                setModalVisible(false);
            }
            // this.bs.current.snapTo(1);
        });
    }

    const ChoosePhotoFromGalery = () => {
        ImagePicker.openPicker({
            width: wp('30%'),
            height: hp('15%'),
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path);
            if (image) {
                setModalVisible(false);
            }
            // this.bs.current.snapTo(1);
        });
    }

    const ProfilePicSet = () => {
        if (image) {
            setModalVisible(false);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.lightPurples} />

                <Modal isVisible={isModalVisible}
                    animationOutTiming={900}
                    animationInTiming={900}
                    hideModalContentWhileAnimating={true}
                    useNativeDriverForBackdrop={true}
                    onBackdropPress={() => setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}

                    avoidKeyboard={true}
                    useNativeDriver={true}
                    style={{ alignSelf: 'center', }}
                >

                    <View style={{ width: wp('100%'), height: hp('50%'), alignItems: 'center', marginTop: hp('50%'), borderTopLeftRadius: hp('4%'), borderTopRightRadius: hp('4%'), backgroundColor: 'white' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray', width: wp('30%'), borderRadius: hp('1.5%'), marginTop: hp('2%'), }}></View>
                        <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('5%'), padding: wp('2.5%'), }}>
                            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginBottom: hp('1%'), paddingLeft: wp('1%') }}>Upload Photo</Text>

                        </View>


                        <View style={{ width: wp('100%'), height: hp('9%'), alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={TakePhotoFromCamera}
                                style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', }}
                            >
                                <Text style={{ color: Colors.white }}>Take Photo From Camera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ChoosePhotoFromGalery}
                                style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', marginTop: 12 }}
                            >
                                <Text style={{ color: Colors.white }}>Choose Photo From Galery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}
                                style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', marginTop: 12 }}
                            >
                                <Text style={{ color: Colors.white }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={{ width: wp('100%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: hp('16%'),
                            width: wp('30%'),
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'red',
                            // marginTop: hp('1%')
                        }} onPress={toggleModal}>
                        {image == '' ?
                            <View style={{ width: wp('13%'), height: hp('12%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                                <Image source={require('../Assetst/Images/6.png')} style={{ width: hp('12%'), height: hp('12%'), borderRadius: hp('1%'), }} />
                            </View> :
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{ height: 100, width: 100, }}
                                imageStyle={{ height: hp('15%'), width: wp('25%'), marginTop: hp('0.5%'), alignItems: 'center', borderRadius: hp('1%'), backgroundColor: 'gray' }}
                            >
                            </ImageBackground>}


                    </TouchableOpacity>
                    <View style={{ width: wp('100%'), height: hp('4%'), justifyContent: 'center', alignItems: 'center', marginTop: hp('0.3%') }}>
                        <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), fontWeight: 'normal', }}>Upload your photo</Text>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('12%'), marginTop: hp('0.5%') }}>
                    <View style={{ width: wp('96%'), height: hp('4%'), justifyContent: 'center', alignSelf: 'center', marginTop: hp('0.3%'), }}>
                        <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), marginLeft: hp('0.3%'), fontWeight: 'normal', }}>Enter Your Name</Text>
                    </View>
                    <View style={{ width: wp('96%'), alignSelf: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('1.5%'), borderWidth: 1, borderColor: Colors.darkPurple, height: hp('7%'), marginTop: hp('0.3%'), }}>
                        <TextInput
                            placeholder='Joseph Harris'
                            placeholderTextColor='black'
                            style={{ fontSize: hp('2.2%'), width: wp('96%'), alignSelf: 'center', height: hp('7%'), marginLeft: hp('2%') }}
                        // keyboardType='email-address'
                        // onChangeText={handleChange('email')}
                        // onBlur={handleBlur('email')}
                        // value={values.email}
                        />
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('12%'), marginTop: hp('0.5%') }}>
                    <View style={{ width: wp('96%'), height: hp('4%'), justifyContent: 'center', alignSelf: 'center', marginTop: hp('0.3%'), }}>
                        <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), marginLeft: hp('0.3%'), fontWeight: 'normal', }}>Date of Birth</Text>
                    </View>
                    <View style={{ width: wp('96%'), height: hp('7%'), marginTop: hp('0.3%'), alignItems: 'center', borderRadius: hp('1%'), alignSelf: 'center', borderWidth: 1, borderColor: Colors.darkPurple }}>

                        <View>
                            <DatePicker
                                style={styles.inputTxt3}
                                date={date} // Initial date from state
                                mode="date" // The enum of date,
                                placeholder="DD-MM-YYYY"
                                iconComponent={
                                    <FontAwesome5 name='calendar-alt' color='#a9a9a9' size={hp('3%')} />
                                }
                                format="DD-MM-YYYY"
                                minDate="01-01-1900"
                                maxDate="19-01-2050"
                                customStyles={{
                                    dateInput: { borderWidth: 0, alignItems: 'flex-start', paddingLeft: wp('1%'), fontSize: hp('1.5%') },
                                    dateText: { fontSize: hp('1.8%'), color: 'black' },
                                    placeholderText: {
                                        color: 'black',
                                        fontSize: hp('1.5%')
                                    }
                                }}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                                androidMode={'spinner'}
                            />
                            {/* 
                            <DatePicker
                                modal
                                open={open}
                                date={date}

                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                                style={{ width:wp('80%'),backgroundColor:'red'}}
                            />
                            <TouchableOpacity onPress={() => setOpen(true)} style={{ width: wp('12%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', marginRight: hp('1%'), }}>
                                <AntDesign name='caretdown' color='black' size={hp('2.5%')} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('12%'), marginTop: hp('0.5%') }}>
                    <View style={{ width: wp('96%'), height: hp('4%'), justifyContent: 'center', alignSelf: 'center', marginTop: hp('0.3%'), }}>
                        <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), marginLeft: hp('0.3%'), fontWeight: 'normal', }}>Choose Your City</Text>
                    </View>
                    <View style={{ width: wp('96%'), flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('1.5%'), borderWidth: 1, borderColor: Colors.darkPurple, height: hp('7%'), marginTop: hp('0.3%'), }}>
                        <TextInput
                            placeholder='New Delhi'
                            placeholderTextColor='black'
                            style={{ fontSize: hp('2.2%'), width: wp('80%'), alignSelf: 'center', height: hp('7%'), marginLeft: hp('2%') }}
                        // keyboardType='email-address'
                        // onChangeText={handleChange('email')}
                        // onBlur={handleBlur('email')}
                        // value={values.email}
                        />
                        <TouchableOpacity style={{ width: wp('12%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', marginRight: hp('1%'), }}>
                            <AntDesign name='caretdown' color='black' size={hp('2.5%')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('0.5%'), }}>
                    <View style={{ width: wp('96%'), height: hp('4%'), justifyContent: 'center', alignSelf: 'center', marginTop: hp('0.3%'), }}>
                        <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), marginLeft: hp('0.3%'), fontWeight: 'normal', }}>Gender</Text>
                    </View>
                    <View style={{ width: wp('96%'), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', backgroundColor: Colors.primaryColor8, height: hp('8%'), marginTop: hp('0.5%'), alignItems: 'center' }}>
                        <TouchableOpacity onPress={Male}
                            style={{ backgroundColor: color ? Colors.lightPurples : "white", width: wp('40%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginLeft: hp('0.3%'), borderWidth: 1, borderColor: Colors.darkPurple }} >
                            <Text style={{ fontWeight: 'bold', fontSize: hp('1.8%'), color: color ? "white" : Colors.lightPurples }}>Male</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={Female}
                            style={{ backgroundColor: myColor ? Colors.lightPurples : "white", width: wp('40%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginRight: hp('0.3%'), borderWidth: 1, borderColor: Colors.darkPurple }}>
                            <Text style={{ fontWeight: 'bold', fontSize: hp('1.8%'), color: myColor ? "white" : Colors.lightPurples }}>Female</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('FollowNext')} style={{ width: wp('96%'), height: hp('7%'), backgroundColor: Colors.lightPurples, alignSelf: 'center', marginTop: hp('12%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('1.5%') }}>
                    <Text style={{ fontWeight: 'bold', fontSize: hp('1.8%'), color: "white" }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),

        backgroundColor: Colors.primaryColor8
    },

})

export default ProfileScreen;