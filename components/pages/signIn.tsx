import React, { useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default () => {
    // put all varis and information here
  

    return <View>
                <Text>PlusOne</Text>
                <TextInput placeholder='Email' style={style.signInForm} />
                <TextInput placeholder='Password'  style={style.signInForm} />
                <Button style={style.ButtonSign} ><Text>Sign In</Text> </ Button>
            </View>
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