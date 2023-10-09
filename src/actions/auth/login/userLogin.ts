//to remove
import logMessage from "@constants/LogFunction";

// React and React Native imports
import { Alert } from "react-native";

//External imports
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import { AxiosResponse } from "axios";

//Internal imports
import { validateUsername } from "@utils/validation";
import { postData } from "@utils/api";
import TurfDataApiResponse from "@interfaces/TurfData";
import { ResponseStatus } from "@interfaces/Register";

const login = async (
  username: string,
  password: string,
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
      Alert.alert(response.data.message);
    }
  };      
  

  // Validate the username and initiate the login process.
  validateUsername(username)
    ? await postData("login", body, false, true, onResponse)
    : Alert.alert("Fields not satisfiable");
};

export default { login };
