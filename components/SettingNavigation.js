import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import DelTabs from './DelTab';

import Page1 from '../screens/HomeTabNav/Home'
import Page2 from '../screens/HomeTabNav/Settings';

const Stack = createStackNavigator();

export default function SettingNavigation() {
    return (
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerShown: false
             }}>
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
