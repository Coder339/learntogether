import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native'

import HomeNavigation from './HomeNavigation';
import SettingNavigation from './SettingNavigation';
// import MapNavigation from './MapNavigation';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
              iconName = focused
              ? 'md-arrow-dropup'
              : 'md-arrow-dropup';
            } else if (route.name === 'Settings') {
              iconName = focused
              ? 'md-arrow-dropdown'
              : 'md-arrow-dropdown';
            }
      return <Ionicons name={iconName} size={size=30} color={color} />;
              },
            })}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              style: {
                position: 'absolute',
              },
            activeTintColor: '#fff',
            activeBackgroundColor: 'orange',
            inactiveBackgroundColor:'#17baa1',
            inactiveTintColor: '#fff',
            }}
          >
            
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="Settings" component={SettingNavigation}/>
        </Tab.Navigator>
    );
  }
