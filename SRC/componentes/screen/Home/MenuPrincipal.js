import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'



const MenuPrincipal = () => {
const navigation = useNavigation();
  return (
    <View style={styles.contenedormenu}>
      <Button icon="account-details" mode="contained" onPress={() => navigation.navigate('stack')}>
        ver datos de usuario UwU
    </Button>
    </View>
  )
}

export default MenuPrincipal

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})