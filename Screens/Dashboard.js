import * as React from 'react';
import {  View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1}}>
    <View style={{flex:1.8, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,borderBottomRightRadius: 30,}}>
    <Text style={{color: 'black', marginTop:20,fontSize:26,marginLeft:90,fontWeight: 'bold',}}>My Shooping List</Text>
    <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}style={{width: 50, height: 50,marginTop:10,marginLeft:"43%"}} />
       
      <View style={{flexDirection: "row",flexWrap: "wrap"}}>
      {/*Settings */}
      <TouchableOpacity style={{marginLeft:10,}}onPress={()=> navigation.navigate("SettingNotif")}>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/992/992668.png'}}style={{width: 25, height: 25,marginLeft:10,}} />
      </TouchableOpacity>
      {/*Notification */}
      <TouchableOpacity style={{width: 30, height: 30,marginLeft:50,}}onPress={()=> navigation.navigate("SettingNotif")}>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2645/2645890.png'}}style={{width: 25, height: 25,marginLeft:'830%',}} />
      </TouchableOpacity>
      </View>

   </View>

   <View style={{flex:7, backgroundColor:"#FCF3CF", borderRadius:10}}>
   <Text style={{color: '#534F91', marginTop:10,fontSize:20,marginLeft:"10%",fontWeight: 'bold'}}>Main Catergories</Text>
   
   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/1617/1617578.png'}}style={{width: 30, height: 30,padding:2,}}/> Vegetables</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3194/3194766.png'}}style={{width: 30, height: 30,padding:2,}}/> Fruits</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2722/2722527.png'}}style={{width: 30, height: 30,padding:2,}}/> Beverages</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3050/3050158.png'}}style={{width: 30, height: 30,padding:2,}}/> Dairy </Text>
   </TouchableOpacity>
      
   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3514/3514211.png'}}style={{width: 30, height: 30,padding:2,}}/> Grocery</Text>
   </TouchableOpacity>
      
   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/5029/5029236.png'}}style={{width: 30, height: 30,padding:2,}}/> Frozen</Text>
   </TouchableOpacity>
      
   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3081/3081967.png'}}style={{width: 30, height: 30,padding:2,}}/> Bakery</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/2553/2553629.png'}}style={{width: 30, height: 30,padding:2,}}/> Households</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AddItem")}>
   <Text style={styles.container}><Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/4625/4625809.png'}}style={{width: 30, height: 30,padding:2,}}/> Pharmacy</Text>
   </TouchableOpacity>
  
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#F1C40F",
        width:'79%', 
        marginTop:16, 
        fontWeight: '700',
        color:'black',
        fontSize:20,
        marginLeft:'10%',
        padding:5,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    
  });
export default Dashboard;