import * as React from 'react';
import {  View,Text,Image,SafeAreaView,TextInput,StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';

const Login = ({ navigation }) => {
  return (
   <View style={{ flex: 1}}>
     <View style={{flex:4.5, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,borderBottomRightRadius: 30,}}>
        <Text style={{color: 'black', marginTop:35,fontSize:36,marginLeft:60,fontWeight: 'bold',}}>My Shooping App</Text>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}style={{width: 90, height: 90,marginTop:20,marginLeft:"38%"}} />
        <Text style={{color: 'black', marginTop:10,fontSize:20,marginLeft:"43%",fontWeight: 'bold'}}>Log IN</Text>
     </View>
   
     <View style={{flex:7, backgroundColor:"#FCF3CF", borderRadius:10}}>
       <Text style={{color: '#534F91', marginTop:40,fontSize:20,marginLeft:"23%",fontWeight: 'bold'}}>WELCOME TO ISH APP</Text>
        <SafeAreaView style={{justifyContent:"center"}}>
           {/* User inputs */}
           <Text style={{color: '#534F91', marginTop:30,fontSize:16,marginLeft:"3%",fontWeight: '40%'}}>Username</Text>
           <TextInput style={styles.input}placeholder="Enter username"/>
           <Text style={{color: '#534F91', marginTop:10,fontSize:16,marginLeft:"3%",fontWeight: '40%'}}>Password</Text>
           <TextInput style={styles.input}placeholder="Enter Password"secureTextEntry={true}/>
          <Button title="Log In"
                icon={{type: 'font-awesome',size: 15,color: 'white',}}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{backgroundColor: '#21618C',borderColor: 'transparent',borderRadius: 30,marginTop:40}}
                containerStyle={{width: 200, marginHorizontal: 100,marginVertical: 10,}}
                onPress={()=> navigation.navigate("Dashboard")}
          />
          <Button title="Forgot Password"
                icon={{type: 'font-awesome',size: 15,color: 'white',}}
                titleStyle={{ fontWeight: '700', color:'black' }}
                buttonStyle={{backgroundColor: '#F1C40F',borderColor: 'transparent',borderRadius: 30,marginTop:10,marginBottom:15}}
                containerStyle={{width: 200,marginHorizontal: 100,marginVertical: 10,}}
                onPress={()=> navigation.navigate("Reset")}
          />
       </SafeAreaView>
     </View>
   </View>
  );
}
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
});
export default Login;