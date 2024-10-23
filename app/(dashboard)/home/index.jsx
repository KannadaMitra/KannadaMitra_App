import React from 'react';
import { View, Text, ScrollView, TouchableOpacity , Platform , StatusBar} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  return (
    <View className="flex-1 bg-gray-50 pt-6">
      {/* Welcome Banner */}
      <View className="bg-teal-600 rounded-lg mx-6 p-4 mb-4 shadow " >
      
        <Text className="text-2xl text-white font-bold">Welcome back, User!</Text>
        <Text className="text-white">Keep up your streak! 🎯</Text>
      </View>

      {/* Unit/Level Cards */}
      <ScrollView style={{ marginVertical: 20 }}>
        <View className="flex-row flex-wrap justify-around">
          <TouchableOpacity 
            className="bg-white rounded-lg w-40 p-4 mb-4 shadow" 
            onPress={() => router.push('/units/alphabet')}
          >
            <Text className="text-lg font-bold">Alphabets</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-white rounded-lg w-40 p-4 mb-4 shadow" 
            onPress={() => router.push('/units/vocabulary')}
          >
            <Text className="text-lg font-bold">Vocabulary</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-white rounded-lg w-40 p-4 mb-4 shadow" 
            onPress={() => router.push('/units/phrases')}
          >
            <Text className="text-lg font-bold">Phrases</Text>
          </TouchableOpacity>
          {/* Add more units as needed */}
        </View>
      </ScrollView>

      {/* Daily Goal Tracker */}
      <View className="bg-white p-4 rounded-lg mb-4 shadow">
        <Text className="text-lg font-bold text-center">Daily Goal: 15 mins</Text>
        <Text className="text-center text-gray-600">10 mins completed 🎉</Text>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around bg-gray-200 py-2 rounded-lg h-[80px]">
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Text className="text-teal-600 font-bold">🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/leaderboard')}>
          <Text className="text-teal-600 font-bold">🏆 Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text className="text-teal-600 font-bold">👤 Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Text className="text-teal-600 font-bold">⚙️ Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
