import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HeaderWidget = ({ text, imgSource }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
      <Image source={imgSource} style={styles.image} />
    </View>
  );
};

export default HeaderWidget;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  headerText: {
    fontSize: 25,
    color: "#fff",
    padding: 10,
    fontFamily: "jersey",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
});
