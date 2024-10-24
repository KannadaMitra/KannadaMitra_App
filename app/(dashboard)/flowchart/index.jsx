import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';

// Get status bar height
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

const ZigZagScroll = () => {
  const buttons = Array.from({ length: 10 }, (_, index) => `Button ${index + 1}`);

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {buttons.map((buttonLabel, index) => (
          <View key={index} style={styles.buttonWrapper}>
            <View
              style={[
                styles.buttonContainer,
                index % 2 === 0 ? styles.leftAligned : styles.rightAligned, // Alternating zig-zag alignment
              ]}
            >
              <TouchableOpacity style={styles.roundButton}>
                <Text style={styles.buttonText}>{buttonLabel}</Text>
              </TouchableOpacity>
            </View>
            {index < buttons.length - 1 && (
              <View
                style={[
                  styles.ladderContainer,
                  index % 2 === 0 ? styles.ladderLeft : styles.ladderRight,
                ]}
              >
                <View style={styles.ladder}>
                  <View style={styles.redDot} />
                  <View style={styles.redDot} />
                  <View style={styles.redDot} />
                </View>
              </View>
            )}
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
  buttonWrapper: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  leftAligned: {
    alignSelf: 'flex-start',
    paddingLeft: 150, // Adjust to your desired spacing
  },
  rightAligned: {
    alignSelf: 'flex-end',
    paddingRight: 150, // Adjust to your desired spacing
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
  ladderContainer: {
    height: 50, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  ladderLeft: {
    transform: [{ rotate: '-45deg' }],
    marginLeft: -25, // Adjust to position correctly
  },
  ladderRight: {
    transform: [{ rotate: '45deg' }],
    marginRight: -25, // Adjust to position correctly
  },
  ladder: {
    width: 160, // Adjust width as needed
    height: 15,
    backgroundColor: '#E5E7EB', // Bright wood color
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  redDot: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    borderRadius: 2.5,
    marginHorizontal: 5,
    
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