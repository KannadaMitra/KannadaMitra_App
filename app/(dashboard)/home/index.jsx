import React from 'react';
import { View, Text, ScrollView, TouchableOpacity , Platform , StatusBar,StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { EggFriedIcon, FlagIcon, FlameIcon, GemIcon, HeartIcon, HomeIcon, Settings2Icon, SettingsIcon, TrophyIcon, UserCogIcon, UserIcon } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0.5;

  return (
    <View className="flex-1 bg-gray-50" style={{paddingTop:statusBarHeight}}>
      <View className="flex flex-row justify-between  bg-gray-200 ">
        <View>
          <Text><FlagIcon color="black"/></Text>
        </View>
        <View>
          <Text><FlameIcon color="black"/></Text>
        </View>
        <View>
          <Text><GemIcon color="black"/></Text>
        </View>
        <View>
          <Text><HeartIcon color="black"/></Text>
        </View>
      </View>
      {/* Welcome Banner */}
      {/* <View className="bg-teal-600 rounded-lg mx-6 p-2 mb-4 shadow " >
      
        <Text className="text-2xl text-white font-bold">Welcome back, User!</Text>
        <Text className="text-white">Keep up your streak! 🎯</Text>
      </View>

      {/* Unit/Level Cards */}
      {/* <ScrollView style={{ marginVertical: 20 }}>
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
          Add more units as needed
        </View>
      </ScrollView> */}

      {/* Daily Goal Tracker */}
      {/* <View className="bg-white p-4 rounded-lg mb-4 shadow">
        <Text className="text-lg font-bold text-center">Daily Goal: 15 mins</Text>
        <Text className="text-center text-gray-600">10 mins completed 🎉</Text>
      </View> */}
      <View className="justify-center bg-black p-40">
        <TouchableOpacity  onPress={() => router.push('/flowchart')}>
          <Text className="text-white font-bold text-[30px]"><EggFriedIcon color="black"/></Text>
          <Text className="text-white font-bold">Start Learning</Text>
        </TouchableOpacity>
      </View>


      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center bg-gray-200 rounded-lg gap-x-10 p-4 ">
        <TouchableOpacity onPress={() => router.push('/home')}>
         <View className="flex flex-col justify-center items-center pl-2">
           <Text className="text-teal-600 font-bold text-[30px] "><HomeIcon color="black"/> </Text>
          <Text className="text-teal-600 font-bold pr-[5px]">Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/leaderboard')}>
        <View className="flex flex-col justify-center items-center mt-3">
          <Text className="text-teal-600 font-bold text-[30px] "><TrophyIcon color="black"/></Text>
          <Text className="text-teal-600 font-bold  pr-[5px] pt-[5px]">Leaderboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
        <View className="flex flex-col justify-center items-center pl-2">
           <Text className="text-teal-600 font-bold text-[30px] "><UserIcon color="black"/> </Text>
          <Text className="text-teal-600 font-bold pr-[5px]">Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')}>
        <View className="flex flex-col justify-center items-center pl-2">
           <Text className="text-teal-600 font-bold text-[30px] "><SettingsIcon color="black"/> </Text>
          <Text className="text-teal-600 font-bold pr-[5px]">Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
