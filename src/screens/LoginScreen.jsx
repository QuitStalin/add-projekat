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
  ActivityIndicator,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // Import safe area insets
import HeaderWidget from "../components/HeaderWidget";

const fetchFonts = () => {
  return Font.loadAsync({
    jersey: require("../../assets/fonts/VCRosdNEUE.ttf"), // Adjust the path to your font file
  });
};

export default function LoginScreen({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const insets = useSafeAreaInsets(); // Get the safe area insets

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Subtract the status bar and safe area insets from the screen height
  const screenHeight =
    Dimensions.get("window").height - insets.top - insets.bottom;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: insets.top, // Use safe area inset for padding
          }}
        >
          <View style={[styles.container, { height: screenHeight }]}>
            <View style={styles.test}>
              <HeaderWidget
                text="SPREMNI ZA ZABAVU!"
                imgSource={require("../../assets/img1.png")}
              />

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
                  navigation.navigate("Home");
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
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontFamily: "jersey",
    marginVertical: 8,
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
    marginVertical: 8,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "jersey",
    marginVertical: 8,
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
