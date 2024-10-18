import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnScreen = ({ route }) => {
  const { unit } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learning: {unit}</Text>
      {/* Add your lessons here */}
      <Text style={styles.content}>Content for {unit} will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
  },
});

export default LearnScreen;
