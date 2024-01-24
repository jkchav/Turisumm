import React from 'react'
import { View, StatusBar } from 'react-native'
import styles from './styles'
import Heders from '../../Custom/Heders'
import Customlogo from '../../Custom/Customlogo'
import Customfield from '../../Custom/Customfiled'

const index = (props) => {
    return (
        <View style={styles.container}>

            <Heders />

            <View style={{ flexDirection: 'row', }}>
                <Customlogo />
                <Customfield />
            </View>

        </View>
    )
}

export default index
