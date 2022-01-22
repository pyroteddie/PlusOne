import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'


type signInScreenProp = StackNavigationProp<RootStackParamsList, 'SignIn'>;

 function signInScreen() {
    // put all varis and information here
  const navigation = useNavigation<signInScreenProp>();

    
    
    return( <View>
                <Text>PlusOne</Text>
                <TextInput placeholder='Email' style={style.signInForm} />
                <TextInput placeholder='Password'  style={style.signInForm} />
                <Button title='Sign In' onPress={()=> navigation.navigate('Main')} ><Text>Sign In</Text> </ Button>
            </View>
    );
  }

const style = StyleSheet.create({
  signInForm: {
    borderRadius:5,
    borderBottomWidth:2,
    backgroundColor:"grey",

  },
  ButtonSign:{
    width: 150,
    height: 30,
    backgroundColor: 'grey',
  }
});
export default signInScreen;