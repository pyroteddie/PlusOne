import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'

type mainScreenProp = StackNavigationProp<RootStackParamsList,'Auth'>;

function AuthScreen(){
    const navigation = useNavigation<mainScreenProp>();
    return(
        <View>
            <Text>Auth Screen</Text>
            <Button title="Login" onPress={()=> navigation.navigate('Main')}/>
        </View>
    )
}
export default AuthScreen;