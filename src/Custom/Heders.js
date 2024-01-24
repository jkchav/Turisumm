import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import colors from '../assets/Colors/Color'
import icons from '../assets/icon/icon'
import Modal from 'react-native-modal'
const Heders = () => {
    const [open, setOpen] = useState(false)

    return (
        <View>

            <View style={[style.imageview, open && style.imageviewOpen]}>
                <Text style={[style.text, open && style.textOpen, { fontSize: 25, color: 'white' }]}>Admin Tools Company Profile</Text>


                <TouchableOpacity onPress={() => {
                    setOpen(true)
                }}
                    style={{ position: 'absolute', right: 10, }}>
                    <Image source={icons.user} style={{ maxHeight: 50, maxWidth: 50 }} />

                </TouchableOpacity>
                <Modal isVisible={open} backdropOpacity={0.5} animationIn={'slideInLeft'} animationOut={'slideOutLeft'}
                    onBackdropPress={() => setOpen(false)}>
                    <View style={{ right: 55 }}>
                        <View style={style.modalview}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '7%' }}>
                                <Image source={icons.userex} style={{ height: 50, maxWidth: 180, marginLeft: '10%' }} />
                                <TouchableOpacity onPress={() =>
                                    setOpen(false)} style={{ position: 'absolute', right: 10 }}>
                                    <Image source={icons.arrow} style={{ maxHeight: 20, maxWidth: 30 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={[style.arrowview, { marginTop: 30 }]} />
                            <ScrollView style={style.viewtxt}>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Dashboard</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Customers</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Presentations</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>

                                    <Text style={style.text}>Calender</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Training</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Chat Room</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Task Board</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Activity Board</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>User Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>Marketing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.arrowview}>
                                    <Text style={style.text}>admin Tools</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>

                </Modal>
                <View style={{ position: 'absolute', right: 70, }}>
                    <Image source={icons.bell} style={{ maxHeight: 30, maxWidth: 30 }} />

                </View>

            </View>
        </View>
    )
}

export default Heders

const style = StyleSheet.create({
    imageview: {
        backgroundColor: colors.heder,
        height: "30%",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10, // Add padding to create some space
    },

    modalview: {
        width: '40%',
        height: '120%',
        backgroundColor: 'white',
        borderRadius: 10,


    },
    imageviewOpen: {
        paddingHorizontal: 0, // Reduce padding when modal is open
    },
    textOpen: {
        marginLeft: 500// Adjust left margin when modal is open
    },

    text: {
        fontSize: 20,
        color: 'black',
        marginLeft: 7

    },
    viewtxt: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10

    },
    arrowview: {
        marginTop: 25,
        borderBottomWidth: 1,
        marginHorizontal: 10,
        flexDirection: 'row',


    },
    opacity: {
        position: "absolute",
        right: 0
    }
})
