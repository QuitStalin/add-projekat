import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar, // Import StatusBar
  Dimensions, // Import Dimensions
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    jersey: require("../../assets/fonts/VCRosdNEUE.ttf"), // Adjust the path to your font file
  });
};

export default function LoginScreen({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Get the status bar height
  const statusBarHeight = StatusBar.currentHeight || 0;
  const screenHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: statusBarHeight, // Add paddingTop to avoid overlap
          }}
        >
          <View
            style={[
              styles.container,
              { height: screenHeight - statusBarHeight },
            ]}
          >
            <View style={styles.test}>
              <View style={styles.header}>
                <Text style={styles.headerText}>SPREMNI ZA ZABAVU!</Text>
                <Image
                  source={require("../../assets/img1.png")}
                  style={styles.image}
                />
              </View>
              <Text style={styles.title}>PRIJAVI SE I KRENI!</Text>

              <TextInput
                style={styles.input}
                placeholder="IME"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#d3d3d3"
              />
              <TextInput
                style={styles.input}
                placeholder="LOZINKA"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#d3d3d3"
                secureTextEntry
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  /* Add your login logic here */
                }}
              >
                <Text style={styles.buttonText}>ULOGUJ SE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  /* Add your registration logic here */
                }}
              >
                <Text style={styles.buttonText}>REGISTRUJ SE</Text>
              </TouchableOpacity>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#FBE5AE",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "jersey",
  },
  test: {
    width: "100%",
    height: "85%",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
  },
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
  title: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontFamily: "jersey",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "black",
    fontFamily: "jersey",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "jersey",
  },
  buttonText: {
    fontSize: 23,
    color: "#fff",
    fontFamily: "jersey",
  },
  iconButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "15%",
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
