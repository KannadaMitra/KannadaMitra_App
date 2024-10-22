import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
      {/* Welcome Banner */}
      <View style={{ padding: 20, backgroundColor: '#4CAF50', borderRadius: 10, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold' }}>Welcome back, User!</Text>
        <Text style={{ fontSize: 16, color: '#FFF' }}>Keep up your streak! 🎯</Text>
      </View>

      {/* Unit/Level Cards */}
      <ScrollView style={{ marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.unitCard} onPress={() => router.push('/units/alphabet')}>
            <Text style={styles.unitTitle}>Alphabets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unitCard} onPress={() => router.push('/units/vocabulary')}>
            <Text style={styles.unitTitle}>Vocabulary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.unitCard} onPress={() => router.push('/units/phrases')}>
            <Text style={styles.unitTitle}>Phrases</Text>
          </TouchableOpacity>
          {/* Add more units as needed */}
        </View>
      </ScrollView>

      {/* Daily Goal Tracker */}
      <View style={{ padding: 20, backgroundColor: '#FFF', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Daily Goal: 15 mins</Text>
        <Text style={{ fontSize: 14, textAlign: 'center', color: '#777' }}>10 mins completed 🎉</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#E0E0E0' }}>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Text>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/leaderboard')}>
          <Text>🏆 Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Text>👤 Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Text>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  unitCard: {
    width: '40%',
    padding: 20,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};
