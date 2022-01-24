import React, { useEffect } from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from '../RootStackParams'
import { LinearGradient } from 'expo-linear-gradient';


type signInScreenProp = StackNavigationProp<RootStackParamsList, 'SignIn'>;

 function signInScreen() {
    // put all varis and information here
  const navigation = useNavigation<signInScreenProp>();
return( 
  <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']} style={style.background}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>PlusOne</Text>
                <TextInput placeholder='Email' style={style.signInForm} />
                <TextInput placeholder='Password'  style={style.signInForm} />
                <Pressable onPress={()=> navigation.navigate('Main')} style={style.ButtonSign}><Text style={style.buttonText}>Sign In</Text> </ Pressable>
      </View>
      </LinearGradient>
    );
  }

const style = StyleSheet.create({
  signInForm: {
    borderRadius:5,
    borderBottomWidth:2,
    height:38,
    width:300,
    backgroundColor:"white",
    marginBottom:5,

  },
  ButtonSign:{
    width: 250,
    height: 40,
    borderRadius:5,
    backgroundColor: '#03E1EF',
    alignItems:'center',
    justifyContent:'center',
   
  },
  buttonText:{
    justifyContent:'center',
    textAlign:'center',
    alignItems: 'center',
    flex: 1,
    lineHeight: 40,
    
  },

  background:{
    flex:1,
  }
});
export default signInScreen;