import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Info from '../screens/ProfileTabs/Info';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
        <Stack.Navigator 
            initialRouteName="User Account Info"
            screenOptions={{
                headerShown: false
              }}>
            <Stack.Screen name="User Account Info" component={Info} />
    
        </Stack.Navigator> 
    )
}