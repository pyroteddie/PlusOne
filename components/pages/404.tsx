import React, { useEffect } from 'react';
import { Pressable, Text, TextInput, Touchable, View } from 'react-native';
import  HomePage  from './homePage';
import { Link }  from 'react-router-dom';


export default () => {
    // put all varis and information here
  

    return <View>
                <Text>PlusOne</Text>
                <Text>Opps Looks like you got lost!</Text>
                    <Link to='/home'>Go home</Link>
                <Pressable onPress= {() => to='/home'}></Pressable>
            </View>
