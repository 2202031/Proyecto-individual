// screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseConfig from '../../FirebaseConfig';


const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

const RegisterScreen = ({ navigation }) => {
    

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Cuenta creada');
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error al crear la cuenta', error.message);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Bienvenido');
        navigation.reset({
          index: 0,
          routes: [{ name: 'UserList' }],
        });
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error al loggear', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <Button mode="contained" onPress={handleRegister}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
});

export default RegisterScreen;
