import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Dimensions,Platform,StatusBar } from 'react-native';

// Get screen width
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0.5;

const ZigZagScroll = () => {
  const buttons = Array.from({ length: 10 }, (_, index) => `Button ${index + 1}`);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={{padding:statusBarHeight}}>
      {buttons.map((buttonLabel, index) => (
        <View
          key={index}
          style={[
            styles.buttonContainer,
            index % 2 === 0 ? styles.leftAligned : styles.rightAligned, // Alternating zig-zag alignment
          ]}
        >
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  buttonContainer: {
    marginBottom: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  leftAligned: {
    alignSelf: 'flex-start',
    paddingLeft: 50, // Adjust to your desired spacing
  },
  rightAligned: {
    alignSelf: 'flex-end',
    paddingRight: 50, // Adjust to your desired spacing
  },
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 50, // This creates the round shape
    backgroundColor: '#6cc24a', // Duolingo-like green color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ZigZagScroll;
