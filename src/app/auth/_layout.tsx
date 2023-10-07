import { Stack } from "expo-router";

export const Layout = () => {
  //const initialRouteName = true ? "auth" : "booking";
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgot_password" />
    </Stack>
  );
};
