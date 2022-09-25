import * as React from 'react';
import {  View,Text,Image } from 'react-native';
import { Button } from '@rneui/themed';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
        <View style={{flex:5.5, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,}}>
   <Text style={{color: 'black', marginTop:55,fontSize:36,marginLeft:60,fontWeight: 'bold',}}>My Shooping List</Text>
   <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}
       style={{width: 90, height: 90,marginTop:50,marginLeft:"40%"}} />
  
   </View>
   <View style={{flex:7, backgroundColor:"#FCF3CF", borderRadius:10}}>

   <Text style={{color: '#534F91', marginTop:40,fontSize:20,marginLeft:"10%",fontWeight: 'bold'}}>WELCOME TO MY SHOPPING LIST</Text>
      <Button
                title="Log In"
                icon={{
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#21618C',
                  borderColor: 'transparent',
                  borderRadius: 30,
                  marginTop:40
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 100,
                  marginVertical: 10,
                }}
                onPress={()=> navigation.navigate("Login")}
              />
              <Button
                title="Sign Up"
                icon={{
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                titleStyle={{ fontWeight: '700', color:'black' }}
                buttonStyle={{
                  backgroundColor: '#F1C40F',
                  borderColor: 'transparent',
                  borderRadius: 30,
                  marginTop:10,
                  marginBottom:15
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 100,
                  marginVertical: 10,
                }}
                onPress={()=> navigation.navigate("Signup")}
              />
              </View>
    </View>
  );
}
export default LoginScreen;