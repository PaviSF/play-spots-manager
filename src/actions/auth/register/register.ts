import { Alert } from "react-native";
import RegisterResponseData, { RegisterData } from "@interfaces/Register";
import { AxiosResponse } from "axios";
import { postData } from "@utils/api";
import { isValidPhoneNumber } from "@utils/validation";

export const register = async (
  registerDetails: RegisterData,
  setLoading: (loading: boolean) => void,
  changeAlertBoxState: () => void
) => {
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


