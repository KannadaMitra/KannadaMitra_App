import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  HomeIcon,
  SettingsIcon,
  TrophyIcon,
  UserIcon,
} from "lucide-react-native";

export const Footer = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");

  const handlePress = (route, buttonName) => {
    console.log(`Button pressed: ${buttonName}`);
    setActiveButton(buttonName);
    router.push(route);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => handlePress("/home", "home")}
        style={[
          styles.iconContainer,
          activeButton === "home" && styles.activeIconContainer,
        ]}
      >
        <HomeIcon color="black" size={30} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("/leaderboard", "leaderboard")}
        style={[
          styles.iconContainer,
          activeButton === "leaderboard" && styles.activeIconContainer,
        ]}
      >
        <TrophyIcon color="black" size={30} />
        <Text style={styles.iconText}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("/feed", "settings")}
        style={[
          styles.iconContainer,
          activeButton === "settings" && styles.activeIconContainer,
        ]}
      >
        <SettingsIcon color="black" size={30} />
        <Text style={styles.iconText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("/profile", "profile")}
        style={[
          styles.iconContainer,
          activeButton === "profile" && styles.activeIconContainer,
        ]}
      >
        <UserIcon color="black" size={30} />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  activeIconContainer: {
    backgroundColor: "#D1D5DB",
    borderRadius: 5,
  },
  iconText: {
    color: "#0D9488",
    fontWeight: "bold",
    paddingTop: 5,
  },
});
