import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'

type mainScreenProp = StackNavigationProp<RootStackParamsList,'Main'>;

function MainScreen(){
    const navigation = useNavigation<mainScreenProp>();
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Main Screen</Text>
            <Button title="Login" onPress={()=> navigation.navigate('Auth')}/>
        </View>
    )
}
export default MainScreen;