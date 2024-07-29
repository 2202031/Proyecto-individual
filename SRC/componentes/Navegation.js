import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";


//Screen Principal
import MenuPrincipal from "./screen/Home/MenuPrincipal";
import Luces from "./screen/Luces/Luces";
import Puertas from "./screen/Puertas/Puertas";
import Setting from "./screen/Setting/Setting";
import User from "./screen/User/User"



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
function MyStack(){
    return(
        <HomeStack.Navigator initialRouteName="homeScreen">
        <HomeStack.Screen name="homeScreen" component={MenuPrincipal} />
        <HomeStack.Screen name="stack" component={UserDetalles} 
        options={{
            hearderBackTitleVisible:false
        }}/>
        </HomeStack.Navigator>
    )
}

function MyTabs() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:'purple'
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
        component={RegisterScreen} />

        <Tab.Screen 
         options={{
            tabBarLabel:'Focos',
            tabBarIcon: ({ color, size }) =>(
                <MaterialIcons name="lightbulb" size={size} color={color} />
            ),
        }}
        name="Luces" 
        component={Luces} />

        <Tab.Screen 
        options={{
            tabBarLabel:'Puertas',
            tabBarIcon: ({ color, size }) =>(
                <MaterialIcons name="sensor-door" size={size} color={color} />
            ),
        }}
        name="Puertas" 
        component={Puertas} />

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
       
            <MyTabs/>
        
    );
  }

