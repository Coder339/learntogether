import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Settings() {
    return (
        <View style={styles.screen}>
            <Text>settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
