import React, { useEffect } from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View,Image, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamsList} from './RootStackParams'
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'John Smith',
    comments: 'he said no when i tried to sleep with him',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Smith Jone',
    comments: 'turned up so late it was over',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Jonny Dick',
    comments: 'Tried to hit on me to many times',
  },
];

const Item = ({ title,comments }) => (
  <View style={style.reviewItem}>
    <Text style={style.reviewTitle}>{title}</Text>
    <Text style={style.reviewComments}>{comments}</Text>
  </View>
);


type ProfileScreenProp = StackNavigationProp<RootStackParamsList, 'Profile'>;

 function ProfileScreen() {
    // put all varis and information here
  const navigation = useNavigation<ProfileScreenProp>();

  const renderItem = ({ item }) => (
    <Item title={item.title} comments={item.comments}/>
  );

return( 
  <LinearGradient  colors={['#03E1EF', '#834AFC','#444EA6']} style={style.background}>
      <View >
                <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center'}}>
                <Pressable onPress={()=> navigation.navigate('Main')}>Back</Pressable>
                <View style={{flex:1, flexDirection: "row", alignItems:'center', justifyContent:'center'}}>
                <View ><Text style={{fontSize:40,color:'#6877FF', fontFamily:'Sitka Text'}}>Plus</Text></View>
                <View ><Text style={{fontSize:40,color:'white',fontFamily:'Sitka Text', fontWeight:700,}}>One</Text></View>
                </View>
                </View>
                
                <View style={{marginTop: 60, alignItems:'center', justifyContent:'center',marginBottom:10,}}>
                  <View style={{borderBottomColor: 'white', borderBottomWidth: 2,width:"100%",alignItems:'center', justifyContent:'center' }}>
                    <Image style={style.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
                  </View>
                </View>
                <View style={{flexDirection: "row",}}>
                <Text style={style.titleText}>Meet, John </Text>
                <Text style={{ alignItems:'center', justifyContent:'center', color:'white'}}>Windsor, QLD </Text>
                </View>
                
                <View style={{marginTop: 25, marginBottom:10,}}>
                <Text style={style.Bio}>I’m 24 year old & love to entertain. I’m really easy going and alot of fun. I cant wait to catch up with you!</Text>
                
                <Text style={style.Bio}>Hobbies</Text>
                <Text style={style.Bio}>Hiking, Camping, Movies, Foodie, Beach</Text>
                
                </View>

                <View style={{marginTop:20,}}>
                <Text style={style.titleText}>Reviews</Text>
                <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
                </View>
                
      </View>
      </LinearGradient>
    );
  }

const style = StyleSheet.create({
  titleText: {
    marginLeft:5,
    fontSize:16,
    fontWeight:'500',
    color:'white',
    flex:1,
},
Bio:{
    fontSize:14,
    fontWeight:'normal',
    color:'white',
    marginLeft:15,
    width:300,
},
  tinyLogo: {
    width: 150,
    height: 150,
    justifyContent:'center',
    borderRadius:'50%',
    zIndex:2,
},

  background:{
    flex:1,
  },  
  reviewItem: {
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: '#6877FF',
    borderBottomWidth: 2,
  },
  reviewTitle: {
    fontSize: 16,
    color:'white',
    fontWeight:'500',
  },
  reviewComments: {
    fontSize: 14,
    color:'white',
  },
});

export default ProfileScreen;
