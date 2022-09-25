import React, { useState } from "react";
import {  View,Text,Image,SafeAreaView,Switch,StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const SettingNotif = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container,{flexDirection:"column"}]}>
      <View style={{flex:3.5, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,borderBottomRightRadius: 30,}}>
        <Text style={{color: 'black', marginTop:35,fontSize:36,marginLeft:60,fontWeight: 'bold',}}>My Shooping App</Text>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}style={{width: 90, height: 90,marginTop:20,marginLeft:"38%"}} />
        <Text style={{color: 'black', marginTop:10,fontSize:20,marginLeft:"20%",fontWeight: 'bold'}}>SETTINGS & NOTIFICATIONS</Text>
      </View>
        
      <View style={{flex:7, backgroundColor:"white", borderRadius:10}}>
        <SafeAreaView style={{justifyContent:"center"}}>
         {/* input feilds */}
         <View style={{flexDirection: "row",flexWrap: "wrap"}}>
         <Text style={styles.text}>
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/1144/1144709.png'}}style={{width: 30, height: 30}}/>  Account </Text>
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png'}}style={{width: 30, height: 30,marginTop:47,marginLeft:190}}/>
         </View>

         <View style={{flexDirection: "row",flexWrap: "wrap"}}>
         <Text style={styles.text}> 
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2058/2058148.png'}}style={{width: 30, height: 30}}/>Notifications</Text>
         <Switch style={{width: 40, height: 40,marginTop:47,marginLeft:160}}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}/>
         </View>

         <View style={{flexDirection: "row",flexWrap: "wrap"}}>
         <Text style={styles.text}> 
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/4413/4413865.png'}}style={{width: 30, height: 30}}/>  Privacy</Text>
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png'}}style={{width: 30, height: 30,marginTop:47,marginLeft:210}}/>
         </View>

         <View style={{flexDirection: "row",flexWrap: "wrap"}}>
         <Text style={styles.text}>  
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/189/189665.png'}}style={{width: 30, height: 30}}/>  Help</Text>
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png'}}style={{width: 30, height: 30,marginTop:47,marginLeft:230}}/>
         </View>

         <View style={{flexDirection: "row",flexWrap: "wrap"}}>
         <Text style={styles.text}> 
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3357/3357329.png'}}style={{width: 30, height: 30}}/>  About</Text>
         <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png'}}style={{width: 30, height: 30,marginTop:47,marginLeft:220}}/>
         </View>

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
  text:{
    color: '#534F91', 
    marginTop:40,
    fontSize:20,
    marginLeft:"7%",
    fontWeight: '40%'
  }
});
export default SettingNotif;