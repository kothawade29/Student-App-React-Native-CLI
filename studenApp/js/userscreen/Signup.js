// SignupScreen.js

import React, { useState , useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet , Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile , setMobile] = useState(null);
  const [userId , setUserId] = useState(null);
  const [name , setName] = useState('');

  useEffect(() => {
    checkUserSignup();
  }, []);

  const checkUserSignup = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        // User has signed up and data is available
        navigation.navigate('UserDetails');
      }
    } catch (error) {
      console.log('Error retrieving user data: ', error);
    }
  };

  const handleSignup = async () => {
    // Perform signup logic here
    // You can use APIs or any other authentication mechanism
    // For simplicity, let's assume successful signup for now

    if (email === '' || password === '' || name === '') {
        Alert.alert('Incomplete Details', 'Please enter name , email and password.');
        return;
      }
  


    const userData = {
      email,
      password,
      mobile,
      userId,
      name
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
     (email?.length > 0 && password?.length > 0 && name?.length > 0) && navigation.navigate('UserDetails');
    } catch (error) {
      console.log('Error saving user data: ', error);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
         <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
        <TextInput
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        style={styles.input}
      />
        <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Signup;
