import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import colors from '../assets/Colors/Color'
import icons from '../assets/icon/icon'

const Customlogo = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.logoview}>
                <View style={styles.mainview}>
                    <View>
                        <Image source={icons.pen} style={styles.penimg} />

                    </View>
                    <Image style={styles.logo} source={icons.logo} />
                </View>
                <View style={styles.viewtxt}>
                    <Text style={styles.text}>MAYA Corporates Private limited</Text>
                </View>
                <View style={styles.aboutview}>
                    <Text style={styles.companyntxt}>About Company</Text>
                    <Text style={styles.paregraptxt}>Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Like other cross and circle games, Ludo is derived from the Indian game Pachisi.</Text>
                </View>
            </View>

        </View>

    )
}

export default Customlogo

const styles = StyleSheet.create({
    logoview: {
        height: '100%',
        width: "80%",
        marginLeft: '6%',
        backgroundColor: "white",
        bottom: '18%'
    },
    logo: {
        maxHeight: 250,
        maxWidth: 250,
        alignSelf: 'center',

    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'black'
    },
    companyntxt: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginLeft: '5%',
        marginTop: '5%'
    },
    paregraptxt: {
        fontSize: 18,
        marginLeft: '5%',
        marginTop: '5%'
    },
    mainview: {
        height: '40%',
        width: '80%',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: '10%',
        justifyContent: 'center',
    },
    penimg: {
        height: 30,
        width: 30,
        tintColor: colors.black,
        right: 0,
        position: 'absolute',
        right: 5,
        bottom: 1
    },
    viewtxt: {
        height: '7%',
        width: '80%',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: '4%',
    },
    aboutview: {
        height: '25%',
        width: '80%',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: '6%',
    }

})
