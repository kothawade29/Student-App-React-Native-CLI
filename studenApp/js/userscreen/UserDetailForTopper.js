import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const UserDetailForTopper = ({ route }) => {
    const { name, email, userId, mobileNumber, SPC } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <AntIcon name="minuscircleo" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.detailContainer}>
        <AntIcon name="mail" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.detailContainer}>
        <AntIcon name="idcard" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{userId}</Text>
      </View>

      <View style={styles.detailContainer}>
        <AntIcon name="phone" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>{mobileNumber}</Text>
      </View>

      <View style={styles.detailContainer}>
        <AntIcon name="star" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Student Score :</Text>
        <Text style={styles.value}>{SPC}</Text>
      </View>

     
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

export default UserDetailForTopper;
