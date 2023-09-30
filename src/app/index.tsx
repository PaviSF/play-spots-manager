import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Redirect } from "expo-router";
import { useFonts } from "expo-font";
import messaging from "@react-native-firebase/messaging";

const index = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Light": require("assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-SemiBold": require("assets/fonts/Montserrat-SemiBold.ttf"),
  });

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await requestUserPermission();
    }
    prepare();
  }, []);
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return <View>{fontsLoaded ? <Redirect href={"/auth/"} /> : null}</View>;
};

export default index;
