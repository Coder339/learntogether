import React,{useContext} from 'react';
import { Icon,View,StyleSheet,Image } from 'react-native'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';
import { Animated } from 'react-native-reanimated';
import {AuthContext} from "../utils/Context"; 

export default function CustomDrawerContent(props) {
    
    const { signOut } = useContext(AuthContext);
  
    return (
      <DrawerContentScrollView {...props}>
          <View style={{marginTop:20, alignItems:'center',justifyContent:'center'}}>
              <Image 
                  source={require('../src/images/elon.jpg')} 
                  style={{ width: 100, height: 100,borderRadius:50 }}
              />
          </View>
          <View style={{marginTop:20}}>

            <DrawerItemList {...props}/>
              
            <Drawer.Section >
            </Drawer.Section>
            
            <DrawerItem
              style={{marginTop:210}}
              inactiveTintColor='#fff'
              icon={({ color, size }) => (
                    <MaterialCommunityIcons
                    name="logout"
                    color={color='#fff'}
                    size={size}
                    />
              )}
              label="Sign Out"
              onPress={() => signOut()}
            />
          </View>
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  })