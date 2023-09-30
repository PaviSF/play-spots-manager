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
import CryptoJS from "crypto-js";

import { useState } from "react";
import messaging from "@react-native-firebase/messaging";

import { validatePassword, validateUsername } from "@utils/auth";
import { decrypt, encrypt } from "@utils/encryption";

const login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logini = async () => {
    const fcm_id = await messaging().getToken();
    const device_id = CryptoJS;
    console.log(device_id)
    validateUsername(userName) && validatePassword(password)
      ? null
      : Alert.alert("Fields not satisfiable");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require("assets/logo.png")} style={styles.logo} />
        <TextInput
          style={styles.credentials}
          placeholder="username"
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.credentials}
          placeholder="password"
          onChangeText={setPassword}
        />
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={logini}>
          <Text style={styles.loginText}>Log In</Text>
          {/** <ActivityIndicator size={25} color={"white"} width={20}/>*/}
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.registerRedirect}>Don't have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default login;

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
