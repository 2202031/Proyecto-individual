import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//Screen Principal
import Login2 from '../componentes/screen/Login/Login2';
import Navegation from '../componentes/Navegation';


const HomeStack = createStackNavigator();

function MyStackLogin(){
    return(
        <HomeStack.Navigator initialRouteName="homeScreen">
        <HomeStack.Screen name="login" component={Login2} />
        <HomeStack.Screen name="dashoard" component={Navegation} 
        options={{
            hearderShown: false 
        }}/>
        </HomeStack.Navigator>
    )
}

  export default function Navegation3(){
    return ( 
        <NavigationContainer>
            <MyStackLogin/>
        </NavigationContainer>
    );
  }

