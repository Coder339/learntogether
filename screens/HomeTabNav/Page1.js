import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Page1({navigation}) {
    return (
        <View style={styles.screen}>
            <Text>gshdgsh</Text>
            <Button title='page2' onPress={()=>navigation.navigate('page2')}/>
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
