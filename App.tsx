import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
<<<<<<< HEAD
import { SignIn } from './components/pages';
import RoutesPage from './components/pages/routes';
=======
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/main';
import AuthScreen from './screens/auth';
import SignInScreen from './screens/signin';
import { RootStackParamsList } from './screens/RootStackParams';
>>>>>>> d0253536295faa171e9b5d9219bb2a9542f1bcf8

const Stack = createStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    
    <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']} style={styles.background}>
      <View style={styles.container}>
      <StatusBar hidden />
<<<<<<< HEAD
        <RoutesPage/>
=======
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen}/>
            <Stack.Screen name="Main" component={MainScreen}/>
          </Stack.Navigator>
        </NavigationContainer> 
>>>>>>> d0253536295faa171e9b5d9219bb2a9542f1bcf8
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
