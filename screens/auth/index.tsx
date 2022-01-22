import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'
import { LinearGradient } from 'expo-linear-gradient';

type mainScreenProp = StackNavigationProp<RootStackParamsList,'Auth'>;

function AuthScreen(){
    const navigation = useNavigation<mainScreenProp>();
    return(
        <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Auth Screen</Text>
            <Button title="Login" onPress={()=> navigation.navigate('Main')}/>
        </View>
        </LinearGradient>
    )
}
export default AuthScreen;