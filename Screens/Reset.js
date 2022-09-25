import * as React from 'react';
import {  View,Text,Image,SafeAreaView,TextInput,StyleSheet,Alert } from 'react-native';
import { Button } from '@rneui/themed';

const Reset = ({ navigation }) => {
  return (
    <View style={[styles.container,{flexDirection:"column"}]}>
      <View style={{flex:4.5, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,borderBottomRightRadius: 30,}}>
        <Text style={{color: 'black', marginTop:35,fontSize:36,marginLeft:60,fontWeight: 'bold',}}>My Shooping App</Text>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}style={{width: 90, height: 90,marginTop:20,marginLeft:"38%"}} />
        <Text style={{color: 'black', marginTop:10,fontSize:20,marginLeft:"29%",fontWeight: 'bold'}}>Reset Your Password</Text>
      </View>
        
      <View style={{flex:7, backgroundColor:"#FCF3CF", borderRadius:10}}>
        <SafeAreaView style={{justifyContent:"center"}}>
         {/* input feilds */}
         <Text style={{color: '#534F91', marginTop:10,fontSize:16,marginLeft:"3%",fontWeight: '40%'}}>Username</Text>
         <TextInput style={styles.input}placeholder="Enter username"/>
         <Text style={{color: '#534F91', marginTop:10,fontSize:16,marginLeft:"3%",fontWeight: '40%'}}>Email</Text>
         <TextInput style={styles.input} placeholder="Enter Email"/> 
         <Button title="Send"
            icon={{type: 'font-awesome',size: 10,color: 'black'}}
            titleStyle={{ fontWeight: '500',color: 'black' }}
            buttonStyle={{backgroundColor: '#F1C40F',borderColor: 'transparent',borderRadius: 30,marginTop:20, }}
            containerStyle={{width: 100,marginHorizontal: 140,marginVertical: 1,marginBottom:10}}
            onPress={()=> Alert.alert("Your code is 23789")}
          />
         <Text style={{color: '#534F91', marginTop:10,fontSize:16,marginLeft:"29%",fontWeight: '40%'}}>Enter the 5 digit code</Text>
          <View style={{flexDirection: "row",flexWrap: "wrap"}}>
            <TextInput style={styles.code} placeholder="   1"secureTextEntry={true}/>
            <TextInput style={styles.code} placeholder="   2"secureTextEntry={true}/>
            <TextInput style={styles.code} placeholder="   3"secureTextEntry={true}/>
            <TextInput style={styles.code} placeholder="   4"secureTextEntry={true}/>
            <TextInput style={styles.code} placeholder="   5"secureTextEntry={true}/>
          </View>
         
         {/* buttons */}
          <Button title="RESET"
            icon={{type: 'font-awesome',size: 15,color: 'white'}}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{backgroundColor: '#21618C',borderColor: 'transparent',borderRadius: 30,marginTop:20, }}
            containerStyle={{width: 200,marginHorizontal: 100,marginVertical: 10,marginBottom:40}}
            onPress={()=> navigation.navigate("Forgot")}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }, 
  code:{
    height: 40,
    width:50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }
});
export default Reset;