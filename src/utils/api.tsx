import axios from "axios";

const AUTH_BASE_URL = process.env.EXPO_PUBLIC_AUTH_BASE_URL;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

interface ApiResponse {
  // Define the shape of the expected response data here
  message: string;
  // Add other properties as needed
}

export const postData = async (
  url: string,
  body: object,
  auth: boolean,
  id_required: boolean,
): Promise<ApiResponse> => {
  const baseUrl = auth ? AUTH_BASE_URL : BASE_URL;
  const headers = id_required
    ? {
        "Content-Type": "application/json",
      }
    : {
        "Content-Type": "application/json",
      };
  try {
    const response = await axios.post<ApiResponse>(`${baseUrl}/${url}`, body, {
      headers,
    });

    // Handle the response data here
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    // Handle any errors here, e.g., network error, server error, etc.
    console.error("API Request Error:", error);
    throw error;
  }
};
