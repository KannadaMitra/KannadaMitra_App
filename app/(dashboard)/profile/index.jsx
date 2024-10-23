import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { useUser } from '@clerk/clerk-expo';

const ProfileScreen = (props) => {
  const { user } = useUser();
  console.log(user);
  const username = user && user.firstName ? user.firstName : 'User';
  return (
    console.log(props.name),
    <View style={styles.container}>
      {/* Header with Avatar and Name */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.avatar} 
        />
       
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.level}>Level 5</Text>
      </View>

      {/* XP Progress */}
      <View style={styles.xpContainer}>
        <Text style={styles.xpText}>XP: 1450 / 2000</Text>
        <ProgressBarAndroid 
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.725} 
          color="#4CAF50"
        />
      </View>

      {/* Buttons for Achievements, Settings, and Account */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🏆 Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>⚙️ Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🔒 Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  level: {
    fontSize: 16,
    color: '#888',
  },
  xpContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  xpText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
