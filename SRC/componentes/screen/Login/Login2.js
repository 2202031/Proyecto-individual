import { StyleSheet, Alert, View } from 'react-native'
import React from 'react'
import { TextInput, Button, Text , PaperProvider } from 'react-native-paper';
import ModalUser from './ModalUser';
import { useNavigation } from '@react-navigation/native';

const LoginP2 = () => {
  const [user, onChangeUser] = React.useState('')
  const [password, onChangePw] = React.useState('')
  const [verpw, SetPW]= React.useState(true) 
  const navegacion = useNavigation();

const verPass = () => {
  SetPW(!verpw)
}

const IngresarUsuario = () => {
  Alert.alert('Usuario es:',user,'| Password', password)
  navegacion.replace('dashoard')
}

  return (
    <PaperProvider>
    <View>
      <Text styles={styles.titulo1}>Hola</Text>
      <Text styles={styles.login1}>Iniciar sesion</Text>
      <View styles={styles.contenedorinput}>
        <TextInput
          label="usuario"
          value={user}
          onChangeText={onChangeUser}
        />
        <TextInput
          style={{ marginTop: 10}}
          value={password}
          label="Password"
          secureTextEntry={{verpw}}
          onChangeText={{onChangePw}}
          right={<TextInput.Icon icon="eye" onPress={verPass} />}
        />
        </View>
        <View style={styles.contenedorinput}>
        <Button style={{ marginTop: 20 }} icon="login" mode="outlined" onPress={IngresarUsuario}>Press me</Button>
        <ModalUser
        nombre={user}
        pw={password}
        persona={persona}
        />
        </View>
    </View>
    </PaperProvider>
  )
}

export default LoginP2

const styles = StyleSheet.create({
    titulo1:{
        textAlign:"center",
        fontSize: 30,
    },
    login1:{
        textAlign:"center",
        fontSize: 20,
    },
    contenedorinput:{

    }
})
