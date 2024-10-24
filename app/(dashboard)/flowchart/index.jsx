import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';

// Get screen width
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0.5;

const ZigZagScroll = () => {
  const buttons = Array.from({ length: 10 }, (_, index) => `Button ${index + 1}`);

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight } ]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
      <Footer style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 100, // Ensure content is not hidden behind the footer
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E5E7EB',
    padding: 10,
  },
});

export default ZigZagScroll;