import React from "react";
import {
  StyleSheet,
  View,
  Linking,
  Alert,
  StatusBar,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import IconButton from "../components/IconButton";
import HeaderWidget from "../components/HeaderWidget";

const HomeScreen = () => {
  const handlePhonePress = () => {
    const phoneNumber = "1234567890"; // Replace with the actual phone number
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert(
            "No Phone App Found",
            "No phone app found. Please select a phone app to make calls.",
            [{ text: "OK" }]
          );
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const handleCalendarPress = () => {
    const url = "calendar:";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert(
            "No Calendar App Found",
            "No calendar app found. Please select a calendar app to view your schedule.",
            [{ text: "OK" }]
          );
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const handleClockPress = () => {
    const url = "clock:";
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert(
            "No Clock App Found",
            "No clock app found. Please select a clock app to view your time.",
            [{ text: "OK" }]
          );
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const statusBarHeight = StatusBar.currentHeight || 0;
  const screenHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: statusBarHeight, // Add paddingTop to avoid overlap
        }}
      >
        <View
          style={[styles.container, { height: screenHeight - statusBarHeight }]}
        >
          <View style={styles.topView}>
            <View style={styles.header}>
              <HeaderWidget
                text="VRIJEME NA TELEFONU"
                imgSource={require("../../assets/img1.png")}
              />
            </View>

            <View style={styles.icons}>
              <IconButton
                style={styles.iconContainer}
                color="#5EE073"
                image={require("../../assets/icons/Phone.png")}
                onPress={handlePhonePress}
              />
              <IconButton
                style={styles.iconContainer}
                color="#FB5F5F"
                image={require("../../assets/icons/Headphones.png")}
                path="Game"
              />
              <IconButton
                style={styles.iconContainer}
                color="#CE5EE0"
                image={require("../../assets/icons/Calendar.png")}
                onPress={handleCalendarPress}
              />
              <IconButton
                style={styles.iconContainer}
                color="#5EA9E0"
                image={require("../../assets/icons/Clock.png")}
                onPress={handleClockPress}
              />
              <IconButton
                style={styles.iconContainer}
                color="#5EA9E0"
                image={require("../../assets/icons/Pyramid.png")}
                path="Game"
              />
              <IconButton
                style={styles.iconContainer}
                color="#CE5EE0"
                image={require("../../assets/icons/Light.png")}
                path="Game"
              />
              <IconButton
                style={styles.iconContainer}
                color="#FB5F5F"
                image={require("../../assets/icons/Snake.png")}
                path="Game"
              />
              <IconButton
                style={styles.iconContainer}
                color="#5EE073"
                image={require("../../assets/icons/Puzzle.png")}
                path="Game"
              />
            </View>
          </View>

          <View style={styles.iconButtonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require("../../assets/exit.png")}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#FBE5AE",
    justifyContent: "space-between",
  },
  topView: {
    padding: 10,
  },
  header: {
    width: "100%",
    marginBottom: 20,
  },
  icons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    width: "22%",
  },
  iconButtonContainer: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "#f4a261",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
