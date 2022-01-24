import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/main';
import AuthScreen from './screens/auth';
import SignInScreen from './screens/signin';
import { RootStackParamsList } from './screens/RootStackParams';

const Stack = createStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sign In" component={SignInScreen}/>
        <Stack.Screen name="Auth" component={AuthScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
 );
}


