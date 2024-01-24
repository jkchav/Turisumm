import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Image } from 'react-native-animatable'
import icons from '../assets/icon/icon'

const Customtext = ({ title, placeholder, height, width }) => {
    return (
        <View>
            <View style={{ justifyContent: 'space-between', }}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={{
                height: height,
                width: width,
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                alignItems: "center",
                borderColor: 'black'
            }}>
                <TextInput placeholder={placeholder} />
                <View style={{ position: 'absolute', right: 5, }}>
                    <Image source={icons.down} style={{ height: 10, width: 10 }} />

                </View>
            </View>

        </View>
    )
}

export default Customtext

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
        marginLeft: 20,
        marginRight: 20
    }
})
