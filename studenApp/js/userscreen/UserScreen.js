// SignupScreen.js

import React, { useState , useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet , Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signup from './Signup';
import UserDetails from './UserDetails';

const UserScreen = ({ navigation }) => {
   const [userInfo , setUserInfo] = useState(null);
  useEffect(() => {
    checkUserSignup();
  }, []);

  const checkUserSignup = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        // User has signed up and data is available
        // navigation.navigate('UserDetails');
        setUserInfo(userData);
      }
    } catch (error) {
      console.log('Error retrieving user data: ', error);
    }
  };


 

  return (
    userInfo===null ? <Signup /> : <UserDetails />
  );
};

export default UserScreen;
