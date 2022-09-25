import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Dashboard from './Screens/Dashboard'
import AddItem from './Screens/AddItem'
import Reset from './Screens/Reset';
import Forgot from './Screens/Forgot';
import SettingNotif from './Screens/SettingNotif';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown: false}} name="Home" component={LoginScreen} />
      <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen  options={{headerShown: false}} name="Signup" component={Signup} />
      <Stack.Screen  options={{headerShown: false}} name="Dashboard" component={Dashboard} />
      <Stack.Screen  options={{headerShown: false}} name="AddItem" component={AddItem} />
      <Stack.Screen  options={{headerShown: false}} name="Reset" component={Reset} />
      <Stack.Screen  options={{headerShown: false}} name="Forgot" component={Forgot} />
      <Stack.Screen  options={{headerShown: false}} name="SettingNotif" component={SettingNotif} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
