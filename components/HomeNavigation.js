import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import DelTabs from './DelTab';

import Home from '../screens/HomeTabNav/Home'
import Settings from '../screens/HomeTabNav/Settings';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false
             }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
