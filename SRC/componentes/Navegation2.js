// navigation2.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import RegisterScreen from './screen/RegisterScreen';
import UserListScreen from './screen/UserListScreen';
import UserDetailsScreen from './screen/UserDetailsScreen';
import MenuPrincipal from './screen/Home/MenuPrincipal';



const Stack = createStackNavigator();


function Navegation2() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="UserList" component={UserListScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}






export default Navegation2