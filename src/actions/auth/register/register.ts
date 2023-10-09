import { Alert } from "react-native";
import RegisterResponseData, { RegisterData } from "@interfaces/Register";
import { AxiosResponse } from "axios";
import { postData } from "@utils/api";
import { isValidPhoneNumber } from "@utils/validation";

const register = async (
  registerDetails: RegisterData,
  changeAlertBoxState: () => void
) => {
  const onResponse = async (
    response: AxiosResponse<RegisterResponseData, any>
  ) => {
    if (response.data.status) {
      changeAlertBoxState();
    } else {
      Alert.alert(response.data.message);
    }
  };

  // Validate the phone number and initiate the register process.
  isValidPhoneNumber(registerDetails.user_phone)
    ? await postData(
        "turf_registration",
        registerDetails,
        false,
        false,
        onResponse
      )
    : Alert.alert("Enter a valid phone number");
};

export default { register };
