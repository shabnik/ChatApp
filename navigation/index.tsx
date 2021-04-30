/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { ColorSchemeName } from 'react-native';
import Colors  from '../constants/Colors';
import ContactsScreen from '../screens/ContactsScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import { Feather } from '@expo/vector-icons'; 
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatRoomScreen from '../screens/ChatRoomScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor: Colors.light.tint,
          //to remove the white line between the title and the MainBar in ios
          shadowOpacity: 0,
          //to remove the white line between the title and the Main bar in android
          elevation: 0,
        },
        headerTitleAlign: 'left',
        headerTintColor: Colors.light.background,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
     }}>
      <Stack.Screen name="Root" 
      component={MainTabNavigator}
      options={{
          title: "SecretChat",
          //a function that will return and display a component to the right of the title
          headerRight: () => (
            //we need to put them in view because when we want to return two components we need to wrap them in the parent component.
            <View style={{
            flexDirection: 'row', 
            width: 60, 
            justifyContent: 'space-between', 
            marginRight: 10}}>
              <Feather name="search" size={24} color="white" />
              <Feather name="more-vertical" size={24} color="white" />
            </View>
          )
      }}
      />
      {/*to navigate to the chatroomscreen from main page*/}
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({route}) => ({
        title: route.params.name,
        headerRight: () => (
          <View style={{
            flexDirection: 'row', 
            width: 100, 
            justifyContent: 'space-between', 
            marginRight: 10}}>
              
            <Feather name="video" size={24} color="white" />
            <Feather name="phone" size={24} color="white" />
            <Feather name="more-vertical" size={24} color="white" />
          </View>
        )
      })}
      />

      <Stack.Screen 
      name="Contacts" 
      component={ContactsScreen} 
      options={{ title: 'Contacts' }} 
      />

      <Stack.Screen 
      name="NotFound" 
      component={NotFoundScreen} 
      options={{ title: 'Oops!' }} 
      />
    </Stack.Navigator>
  );
}
