//to remove
import logMessage from "@constants/LogFunction";

// React and React Native imports
import React, { useState, useRef } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

// Expo imports
import { useRouter } from "expo-router";

// External imports
import { AxiosResponse } from "axios";

// Internal imports
import AlertModal from "@components/AlertModal";
import { postData } from "@utils/api";
import { isValidPhoneNumber, validateUsername } from "@utils/validation";
import RegisterResponseData, { RegisterData } from "@interfaces/Register";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [registerDetails, setRegisterDetails] = useState<RegisterData>({
    turf_name: "",
    location: "",
    description: "",
    user_name: "",
    user_email: "",
    user_phone: "",
  });

  const alertBoxRef = useRef(null);

  const changeAlertBoxState = () => {
    alertBoxRef.current.setAlertBoxState(true);
  };

  // Update registerDetails when text changes
  const handleInputChange = (field: keyof RegisterData, text: string) => {
    setRegisterDetails((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const register = async () => {
    const onResponse = async (
      response: AxiosResponse<RegisterResponseData, any>
    ) => {
      if (response.data.status) {
        setLoading(false);
        changeAlertBoxState();
      } else {
        Alert.alert(response.data.message);
        setLoading(false);
      }
    };

    // Helper function to set loading state and call the postData function.
    const initiateAuth = async () => {
      setLoading(true);
      await postData(
        "turf_registration",
        registerDetails,
        false,
        false,
        onResponse
      );
    };

    // Validate the phone number and initiate the register process.
    isValidPhoneNumber(registerDetails.user_phone)
      ? initiateAuth()
      : Alert.alert("Enter a valid phone number");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text onPress={router.back} style={styles.dismissText}>
        Dismiss
      </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => handleInputChange("user_name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          onChangeText={(text) => handleInputChange("user_phone", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => handleInputChange("user_email", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Venue Name"
          onChangeText={(text) => handleInputChange("turf_name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          onChangeText={(text) => handleInputChange("location", text)}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Describe about your court"
          multiline={true}
          numberOfLines={6}
          onChangeText={(text) => handleInputChange("description", text)}
        />
        <TouchableOpacity style={styles.register} onPress={register}>
          {loading ? (
            <ActivityIndicator size={25} color={"white"} />
          ) : (
            <Text style={styles.registerText}>Register</Text>
          )}
        </TouchableOpacity>
        <AlertModal
          ref={alertBoxRef}
          description={
            "You have successfully registered with playspots. Our representative will contact you soon!"
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

// Styles for the components.
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dismissText: {
    color: "#0985B4",
    fontSize: 14,
    textAlign: "right",
    marginRight: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "85%",
    paddingLeft: 15,
    paddingVertical: 10,
    borderWidth: 0.3,
    borderBottomColor: "gray",
    borderRadius: 13,
    marginVertical: 6,
    fontFamily: "Montserrat-Regular",
  },
  multilineInput: {
    textAlignVertical: "top", // Align text to the top in multiline input
  },
  register: {
    width: "85%",
    backgroundColor: "#009848",
    borderRadius: 13,
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 12,
  },
  registerText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Montserrat-Medium",
  },
});
