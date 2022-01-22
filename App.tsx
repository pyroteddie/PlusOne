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
    
    <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']} style={styles.background}>
      <View style={styles.container}>
      <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen}/>
            <Stack.Screen name="Main" component={MainScreen}/>
          </Stack.Navigator>
        </NavigationContainer> 
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:1,
    color: 'black',
    minWidth: 300,
  },
  background: {
    flex: 1, 
    
  },
});
