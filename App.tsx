import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SignIn } from './components/pages';


export default function App() {
  return (
    
    <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']}
        style={styles.background}
      >
      <View style={styles.container}>
      <StatusBar hidden />
        <SignIn />  
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:4,
  },
  background: {
    flex: 1, 
    
  },
});
