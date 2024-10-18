import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const UNITS = [
  { id: '1', title: 'Kannada Alphabets' },
  { id: '2', title: 'Numbers' },
  { id: '3', title: 'Common Phrases' },
];

const UnitsScreen = ({ navigation }) => {
  const renderUnit = ({ item }) => (
    <View style={styles.unit}>
      <Button 
        title={item.title}
        onPress={() => navigation.navigate('Learn', { unit: item.title })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Unit</Text>
      <FlatList
        data={UNITS}
        renderItem={renderUnit}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  unit: {
    marginBottom: 15,
  },
});

export default UnitsScreen;
