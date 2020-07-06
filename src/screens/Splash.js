import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Colors from '../../Colors'

export default function Splash() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={Colors.lightblue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})