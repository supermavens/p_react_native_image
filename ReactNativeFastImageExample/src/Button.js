import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        margin: 15,
        height: 35,
        paddingRight: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
})

export default Button
