// screens/UserListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, Dialog, Portal, Provider } from 'react-native-paper';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import FirebaseConfig from '../../FirebaseConfig';

const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersList = [];
    querySnapshot.forEach((doc) => {
      usersList.push({ ...doc.data(), id: doc.id });
    });
    setUsers(usersList);
  };

  const handleAddUser = async () => {
    try {
      await addDoc(collection(db, 'users'), { name, email, password });
      fetchUsers();
      setVisible(false);
      setName('');
      setEmail('');
      setPassword('');
      Alert.alert('Usuario agregado');
    } catch (error) {
      console.error(error);
      Alert.alert('Error al agregar usuario', error.message);
    }
  };

  const handleEditUser = async () => {
    try {
      const userDoc = doc(db, 'users', currentUserId);
      await updateDoc(userDoc, { name, email, password });
      fetchUsers();
      setVisible(false);
      setName('');
      setEmail('');
      setPassword('');
      setIsEditing(false);
      setCurrentUserId(null);
      Alert.alert('Usuario actualizado');
    } catch (error) {
      console.error(error);
      Alert.alert('Error al actualizar usuario', error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const userDoc = doc(db, 'users', userId);
      await deleteDoc(userDoc);
      fetchUsers();
      Alert.alert('Usuario eliminado');
    } catch (error) {
      console.error(error);
      Alert.alert('Error al eliminar usuario', error.message);
    }
  };

  const openDialog = (user = {}) => {
    setName(user.name || '');
    setEmail(user.email || '');
    setPassword(user.password || '');
    setIsEditing(!!user.id);
    setCurrentUserId(user.id || null);
    setVisible(true);
  };

  const closeDialog = () => {
    setVisible(false);
    setName('');
    setEmail('');
    setPassword('');
    setIsEditing(false);
    setCurrentUserId(null);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.userRow}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Button onPress={() => openDialog(item)}>Edit</Button>
              <Button onPress={() => handleDeleteUser(item.id)}>Delete</Button>
            </View>
          )}
        />
        <Button mode="contained" onPress={() => openDialog()}>
          Add User
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={closeDialog}>
            <Dialog.Title>{isEditing ? 'Edit User' : 'Add User'}</Dialog.Title>
            <Dialog.Content>
              <TextInput label="Name" value={name} onChangeText={setName} style={styles.input} />
              <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
              <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={closeDialog}>Cancel</Button>
              <Button onPress={isEditing ? handleEditUser : handleAddUser}>
                {isEditing ? 'Update' : 'Add'}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    marginBottom: 12,
  },
});

export default UserListScreen;
