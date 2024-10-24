import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const LessonCard = ({ title, description, icon, color }) => (
  <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
    <Icon name={icon} size={30} color="white" />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </TouchableOpacity>
);

const ProgressBar = ({ progress }) => (
  <View style={styles.progressContainer}>
    <LinearGradient
      colors={['#FFA500', '#FF6347']}
      style={[styles.progressBar, { width: `${progress}%` }]}
    />
  </View>
);

const Feed = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Lessons</Text>
      <ProgressBar progress={75} />
      <Text style={styles.progressText}>75% Complete</Text>

      <LessonCard
        title="Basics 1"
        description="Learn essential phrases and vocabulary"
        icon="book"
        color="#58CC02"
      />
      <LessonCard
        title="Greetings"
        description="Master common greetings and introductions"
        icon="handshake-o"
        color="#CE82FF"
      />
      <LessonCard
        title="Food"
        description="Explore food-related vocabulary and phrases"
        icon="cutlery"
        color="#FF9600"
      />
      <LessonCard
        title="Family"
        description="Learn words for family members and relationships"
        icon="users"
        color="#2B70C9"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Feed;