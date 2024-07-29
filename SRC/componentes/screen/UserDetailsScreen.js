// screens/UserDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';

const UserDetailsScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        setUser(userDoc.data());
      } else {
        Alert.alert('Error', 'User not found');
        navigation.goBack();
      }
    };

    fetchUser();
  }, [userId]);

  const handleUpdate = async () => {
    await updateDoc(doc(db, 'users', userId), user);
    Alert.alert('Success', 'User updated successfully');
    navigation.goBack();
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'users', userId));
    Alert.alert('Success', 'User deleted successfully');
    navigation.goBack();
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={user.name}
        onChangeText={(name) => setUser({ ...user, name })}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={user.email}
        onChangeText={(email) => setUser({ ...user, email })}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleUpdate}>
        Update
      </Button>
      <Button mode="contained" onPress={handleDelete} style={styles.deleteButton}>
        Delete
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
  deleteButton: {
    marginTop: 12,
    backgroundColor: 'red',
  },
});

export default UserDetailsScreen;
