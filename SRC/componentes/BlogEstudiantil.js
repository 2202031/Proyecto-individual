import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../Blogestudiantil/Home";
import Setting from "../../Blogestudiantil/Setting";
import User from "../../Blogestudiantil/User";


const Tab = createBottomTabNavigator();



function MyTabs() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:'#E7D37F',
        tabBarInactiveBackgroundColor:'#365E32',
        tabBarActiveBackgroundColor:'#81A263'
      }}
      >
        <Tab.Screen 
        options={{
            tabBarLabel:'Menu',
            tabBarBadge:0.01,
            headerShown:false,
            tabBarIcon: ({ color, size }) =>(
                <Entypo name="home" size={size} color={color} />
            ),
        }}
        name="Home" 
        component={Home} />

        <Tab.Screen 
        options={{
            tabBarLabel:'Configuracion',
            tabBarIcon: ({ color, size }) =>(
                <Ionicons name="settings" size={size} color={color} />
            ),
        }}
        name="Setting" 
        component={Setting} />

        <Tab.Screen 
        options={{
            tabBarLabel:'Usuario',
            tabBarIcon: ({ color, size }) =>(
                <FontAwesome name="user" size={size} color={color} />
            ),
        }}
        name="User" 
        component={User} />

      </Tab.Navigator>
    );
  }

  export default function Navegation(){
    return ( 
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
  }

