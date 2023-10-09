// React and React Native imports
import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

//Expo imports
import { useRouter } from "expo-router";

//Internal imports
import styles from "@app/auth/styles/login.styles";
import useLogin from "@hooks/auth/login.hooks";

const Login = () => {
  // State variables for username, password, loading, and router.
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { loading, login } = useLogin(); //Custom  hook to handle login

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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => login(username, password, router)}
        >
          {loading ? (
            <ActivityIndicator size={25} color={"white"} />
          ) : (
            <Text style={styles.loginText}>Log I</Text>
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
