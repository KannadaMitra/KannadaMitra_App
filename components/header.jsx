import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlagIcon, FlameIcon, GemIcon, HeartIcon } from "lucide-react-native";

export const Header = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handlePress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          activeIcon === "flag" && styles.activeIconContainer,
        ]}
        onPress={() => handlePress("flag")}
      >
        <FlagIcon color="black" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          activeIcon === "flame" && styles.activeIconContainer,
        ]}
        onPress={() => handlePress("flame")}
      >
        <FlameIcon color="black" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          activeIcon === "gem" && styles.activeIconContainer,
        ]}
        onPress={() => handlePress("gem")}
      >
        <GemIcon color="black" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          activeIcon === "heart" && styles.activeIconContainer,
        ]}
        onPress={() => handlePress("heart")}
      >
        <HeartIcon color="black" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5E7EB",
    padding: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  activeIconContainer: {
    backgroundColor: "#D1D5DB",
    borderRadius: 5,
  },
});
