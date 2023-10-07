// to remove
import logMessage from "@constants/LogFunction";

// React and React Native imports
import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";

//Expo imports
import { useRouter } from "expo-router";

//Export imports
import messaging from "@react-native-firebase/messaging";
import { AxiosResponse } from "axios";

//Internal imports
import TurfDataApiResponse from "@interfaces/TurfData";
import { validateUsername } from "@utils/auth";
import { postData } from "@utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  // State variables for username, password, loading, and router.
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  // Function to handle the login process.
  const login = async () => {
    // Obtain Firebase Cloud Messaging (FCM) token and generate a UUID for the device (unique for each install).
    const fcmId = await messaging().getToken();
    let udId = await AsyncStorage.getItem("ud_id");

    const body = {
      username,
      password,
      fcm_id: fcmId,
      ud_id: udId,
    };
    // Callback function to handle the API response.
    const onResponse = async (
      response: AxiosResponse<TurfDataApiResponse, any>
    ) => {
      if (response.data.message === "Success") {
        await AsyncStorage.setItem("fcm_id", fcmId);
        Alert.alert("Login success");
        router.push("/booking/");
        logMessage(response.data.turf_data[0].turf_name);
      } else {
        setLoading(false);
      }
    };
    // Helper function to set loading state and call the postData function.
    const initiateAuth = async () => {
      setLoading(true);
      await postData("login", body, false, true, onResponse);
    };

    // Validate the username and initiate the login process.
    validateUsername(username)
      ? initiateAuth()
      : Alert.alert("Fields not satisfiable");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("assets/logo.png")} style={styles.logo} />
        {/* Username Input */}
        <TextInput
          style={styles.credentials}
          placeholder="Username"
          onChangeText={setUsername}
        />
        {/* Password Input */}
        <TextInput
          style={styles.credentials}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {/* Forgot Password Link */}
        <Text
          style={styles.forgotPassword}
          onPress={() => router.push("/auth/forgot_password")}
        >
          Forgot Password?
        </Text>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          {loading ? (
            <ActivityIndicator size={25} color={"white"} />
          ) : (
            <Text style={styles.loginText}>Log In</Text>
          )}
        </TouchableOpacity>
      </View>
      {/* Register Link */}
      <TouchableOpacity onPress={() => router.push("/auth/register")}>
        <Text style={styles.registerRedirect}>Don't have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

// Styles for the components.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 180,
    height: 76,
    resizeMode: "cover",
  },
  credentials: {
    borderColor: "#707070",
    borderWidth: 0.2,
    borderRadius: 10,
    width: "80%",
    fontSize: 14,
    paddingLeft: 15,
    paddingVertical: 10,
    marginTop: 20,
    fontFamily: "Montserrat-Regular",
  },
  forgotPassword: {
    fontSize: 14,
    textAlign: "right",
    width: "80%",
    fontFamily: "Montserrat-Regular",
    marginBottom: 12,
    marginTop: 8,
    color: "#9E9E9E",
  },
  loginButton: {
    marginTop: 40,
    backgroundColor: "#009848",
    justifyContent: "flex-start",
    width: "85%",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
  },
  loginText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  registerRedirect: {
    position: "absolute",
    bottom: 0,
    fontFamily: "Montserrat-Regular",
    color: "gray",
    width: "60%",
    flexWrap: "wrap",
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 40,
  },
});
