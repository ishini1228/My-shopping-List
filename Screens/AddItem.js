import * as React from 'react';
import {  View,Text,Image,StyleSheet,SafeAreaView,TextInput } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from "react";

const AddItem = ({ navigation }) => {
  {/*constant to record task items */}
  const [task, setTask] = useState();

  {/*constant to set task items in an array */}
  const [taskItems, setTaskItems] = useState([]);

  {/*store and map the items */}
  const handleAddTask = () => {
   setTaskItems([...taskItems,task])
   setTask(null);
  }

  return (
<View style={{ flex: 1}}>
  <View style={{flex:1.9, backgroundColor:"#2471A3",borderBottomLeftRadius: 30,borderBottomRightRadius: 30,}}>
    <Text style={{color: 'black', marginTop:25,fontSize:26,marginLeft:90,fontWeight: 'bold',}}>My Shooping List</Text>
    <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/891/891462.png'}}style={{width: 50, height: 50,marginTop:10,marginLeft:"43%"}} />
    <Text style={{color: 'black', marginTop:10,fontSize:20,marginLeft:"37%",fontWeight: 'bold'}}>ITEMS LIST</Text>
  </View>

  <View style={{flex:7, backgroundColor:"#FCF3CF", borderRadius:10}}>
   <Text style={{color: '#534F91', marginTop:40,fontSize:20,marginLeft:"5.5%",fontWeight: 'bold'}}>Add Items</Text>
   <SafeAreaView style={{justifyContent:"center"}}>{/* input feild */}
      <TextInput style={styles.input}placeholder="Add your item here" value={task} onChangeText={text =>setTask(text)}/>
      <Button title="Save" 
                icon={{type: 'font-awesome', size: 15, color: 'white',}}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{backgroundColor: '#21618C',borderColor: 'transparent',borderRadius: 30,}}
                containerStyle={{width: 100,marginHorizontal: 280,marginVertical: 5,marginBottom:20}}
                onPress={()=> handleAddTask()}
      />

      {/*Output the items in the taskItem */}     
      <View>
       {
       taskItems.map((item) =>{
       return <Text style={styles.input}>{item}</Text>
       }) 
       }
      </View>

    </SafeAreaView>
  </View>
</View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#B9770E",
        width:'49%', 
        marginTop:20, 
        fontWeight: '700',
        color:'black',
        fontSize:26,
        marginLeft:'30%',
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
export default AddItem;