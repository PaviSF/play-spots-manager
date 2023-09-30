import { Stack } from "expo-router";

export const Layout = () => {
  const initialRouteName = true ? "auth" : "booking";
  return (
    <Stack>
      <Stack.Screen name="auth" />
      <Stack.Screen name="booking" />
    </Stack>
  );
};
