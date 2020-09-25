import React from 'react'
import { StyleSheet, View } from 'react-native'

export default ({ children }) => <View style={styles.section}>{children}</View>

const styles = StyleSheet.create({
    section: {
        marginTop: 25,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 45,
    },
})
