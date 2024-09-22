import { Text, Image, TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const IconButton = ({ image, text, color, path, style, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress(); // Call custom onPress handler if provided
    } else {
      navigation.navigate(path); // Default navigation if no onPress provided
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]} // Apply the color and any additional styles
        onPress={handlePress}
      >
        <Image style={styles.image} source={image} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center", // Center items vertically
    justifyContent: "center",
    padding: 10, // Add padding for better touch response
    borderRadius: 20,
    aspectRatio: 1,
    borderWidth: 2,
  },
  image: {
    width: 40, // Set a fixed width for the image
    height: 40, // Set a fixed height for the image
  },
  text: {
    fontSize: 16, // Adjust the font size as needed
  },
});

export default IconButton;
