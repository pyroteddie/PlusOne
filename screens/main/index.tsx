import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'
import { LinearGradient } from 'expo-linear-gradient';

type mainScreenProp = StackNavigationProp<RootStackParamsList,'Main'>;

function MainScreen(){
    const navigation = useNavigation<mainScreenProp>();
    return(
        <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']} style={styles.background}>
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <Button title="Profile" onPress={()=> navigation.navigate('Profile')}/>
        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      justifyContent: 'center',
      elevation:1,
      color: 'black',
      minWidth: 300,
      zIndex:1,
      display:'flex',
    },
    background: {
      flex: 1, 
      zIndex:0,
    },
  });
export default MainScreen;
