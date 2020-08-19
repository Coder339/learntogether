import * as React from 'react';
import { createDrawerNavigator,drawerIcon } from '@react-navigation/drawer';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

import CustomDrawerContent from '../utils/CustomDrawer';
import Help from '../screens/Help';
import About from '../screens/About'
import HomeTabs from './HomeTabs';
import ProfileNavigation from './ProfileNavigation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
        drawerContentOptions={{           // not working
          activeTintColor: '#fff',
          inactiveTintColor:'#fff',
          activeBackgroundColor:'orange'  
        }}
       drawerStyle={{
          backgroundColor: '#17baa1',
          width: 240,
        }}
       
       drawerPosition = 'left'
       drawerType='back' 
       initialRouteName="Home" 
       drawerContent={props => <CustomDrawerContent {...props} /> } 
       >
          <Drawer.Screen 
            name="Profile" 
            component={ProfileNavigation} 
            options={{ drawerIcon: ({focused,size}) => (<Ionicons 
                                                         name='md-person' 
                                                         size={size}
                                                         color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="Home" 
            component={HomeTabs}
            options={{ drawerIcon: ({focused,size}) => (<Ionicons 
                                                          name='md-home' 
                                                          size={size}
                                                          color='#fff'/>) }}  
          />  
          <Drawer.Screen 
            name="Help" 
            component={Help} 
            options={{ drawerIcon: ({focused,size}) => (<MaterialCommunityIcons 
                                                        name='help-circle' 
                                                        size={size}
                                                        color='#fff'/>) }} 
          />
          <Drawer.Screen 
            name="About App" 
            component={About} 
            options={{ drawerIcon: ({focused,size}) => (<MaterialCommunityIcons 
                                                          name='information' 
                                                          color='#fff'
                                                          size={size}
                                                          color='#fff'/>) }} 
          />
    </Drawer.Navigator>
  );
}
