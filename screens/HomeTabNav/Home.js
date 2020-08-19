import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={styles.screen}>
            <Text>Home</Text>
            <Button title='Settings' onPress={()=>navigation.navigate('Settings')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
