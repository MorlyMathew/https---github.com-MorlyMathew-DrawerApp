
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./src/Login";
import Register from "./src/Register";
import Profile from "./src/Drawer/Profile";
import demo from "./src/Drawer/demo";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
       options={{headerShown:false }}
       name="Login"
       component={Login}/>

<Stack.Screen
       name="Register"
       component={Register}/>
 
       <Stack.Screen
       options={{headerShown:false
      }}
       name="Drawer"
       component={MyDrawer}/>

    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen
         name="Profile"
         component={Profile}
         />

<Drawer.Screen
         name="demo"
         component={demo}
         />
    </Drawer.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}