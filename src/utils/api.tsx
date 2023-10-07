import axios, { AxiosResponse } from "axios";
import TurfDataApiResponse from "@interfaces/TurfData";
import RegisterResponseData from "@interfaces/Register";

const AUTH_BASE_URL = process.env.EXPO_PUBLIC_AUTH_BASE_URL;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

type OnResponseCallback = (response: AxiosResponse<TurfDataApiResponse | RegisterResponseData, any>) => void;

export const postData = async (
  url: string,
  body: object,
  id_required: boolean,
  auth: boolean = true,
  onResponse: OnResponseCallback
) => {
  const baseUrl = auth ? AUTH_BASE_URL : BASE_URL;
  const headers = id_required
    ? {
        "Content-Type": "application/json",
      }
    : {
        "Content-Type": "application/json",
      };
  console.log(baseUrl + url, headers, body, auth, id_required);
  // try {
    console.log("hellooooo");
    await axios
      .post<TurfDataApiResponse>(baseUrl + url, body, {
        headers,
      })
      .then((response) => {console.log(response.data);onResponse(response)});
  // } catch (error) {
  //   // Handle any errors here, e.g., network error, server error, etc.
  //   console.log("API Request Error:", error);
  // }
};
