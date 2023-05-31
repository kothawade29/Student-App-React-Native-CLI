import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign} from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
      }
    } catch (error) {
      console.log('Error retrieving user data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <View style={styles.detailContainer}>
            <AntDesign name="user" size={24} color="black" style={styles.icon} />
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{userData.name}</Text>
          </View>

          <View style={styles.detailContainer}>
            <AntDesign name="phone" size={24} color="black" style={styles.icon} />
            <Text style={styles.label}>Number:</Text>
            <Text style={styles.value}>{userData.mobile}</Text>
          </View>

          <View style={styles.detailContainer}>
            <AntDesign name="idcard" size={24} color="black" style={styles.icon} />
            <Text style={styles.label}>User ID:</Text>
            <Text style={styles.value}>{userData.userId}</Text>
          </View>

          <View style={styles.detailContainer}>
            <AntDesign name="mail" size={24} color="black" style={styles.icon} />
            <Text style={styles.label}>Email ID:</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    fontSize: 16,
    flex: 3,
  },
});

export default UserDetails;
