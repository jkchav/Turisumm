import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../assets/Colors/Color'
import Customtext from './Customtext'
import Customtextinput from './Customtextinput'

const Customfield = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.logoview}>

                <View style={styles.customview}>
                    <Customtext title={'User Type'} placeholder={'Some text'} width={'130%'} />
                    <View style={{ marginLeft: 20 }}>
                        <Customtext title={'User Category'} placeholder={'Some text'} width={'110%'} />
                    </View>
                    <Customtext title={'User Sub Category'} placeholder={'Some text'} />
                </View>
                <View style={styles.customview}>
                    <Customtext title={'Email ID'} placeholder={'Some text'} width={'150%'} />
                    <View style={{ marginLeft: '7%' }}>
                        <Customtext title={'Mobile Number'} placeholder={'Some text'} width={'105%'} />
                    </View>
                    <View style={{ marginRight: '15%' }}>
                        <Customtext title={'Website'} placeholder={'Some text'} width={'150%'} />
                    </View>
                </View>
                <Text style={styles.text}>Address</Text>
                <View style={{ borderWidth: 1, marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                    <TextInput placeholder={'Some text'} />
                </View>
                <View style={styles.customview}>
                    <Customtextinput title={'Country'} placeholder={'Some text'} width={'150%'} />
                    <View style={{ marginRight: '4%' }}>
                        <Customtextinput title={'State'} placeholder={'Some text'} width={'180%'} />
                    </View>
                    <View style={{ marginRight: '15%' }}>
                        <Customtextinput title={'District'} placeholder={'Some text'} width={'152%'} />
                    </View>
                </View>
                <View style={styles.customview}>
                    <Customtextinput title={'Block'} placeholder={'Some text'} width={'270%'} />
                    <View style={{ marginRight: '35%' }}>
                        <Customtextinput title={'City'} placeholder={'Some text'} width={'270%'} />
                    </View>
                </View>
                <View style={styles.customview}>
                    <Customtextinput title={'Locality'} placeholder={'Some text'} width={'260%'} />
                    <View style={{ marginRight: '34%' }}>
                        <Customtext title={'Zipcode'} placeholder={'Some text'} width={'260%'} />
                    </View>
                </View>
                <View style={styles.customview}>
                    <Customtext title={'CIN Number'} placeholder={'Some text'} width={'190%'} />
                    <View style={{ marginRight: '35%' }}>
                        <Customtext title={'Pan'} placeholder={'Some text'} width={'270%'} />
                    </View>
                </View>
                <View style={styles.customview}>
                    <Customtext title={'GST Number'} placeholder={'Some text'} width={'270%'} />
                    <View style={{ marginRight: '35%' }}>
                        <Customtext title={'Enterprise Code'} placeholder={'Some text'} width={'270%'} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Customfield

const styles = StyleSheet.create({
    logoview: {
        flex: 1,
        width: "105%",
        backgroundColor: colors.white,
        bottom: '18%',
        right: '10%'
    },
    text: {
        fontSize: 22,
        color: colors.black,
        fontWeight: '500',
        marginLeft: 20,
        marginRight: 20,
        marginTop: '5%'
    },
    customview: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between',
    }
})

