// authActions.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import { AxiosResponse } from "axios";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { validateUsername } from "@utils/validation";
import { postData } from "@utils/api";
import logMessage from "@constants/LogFunction";
import TurfDataApiResponse from "@interfaces/TurfData";
import { ResponseStatus } from "@interfaces/Register";

export const login = async (
  username: string,
  password: string,
  setLoading: (loading: boolean) => void,
  router: any
) => {
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
    if (response.data.status === ResponseStatus.SUCCESS) {
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
