import {
  setCurrentUser,
  setUserLoading,
} from "@/store/slices/currentUserSlice";
import { dispatch } from "@/store/store";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../../config";

export const fetchCurrentUser = async (token: string): Promise<any> => {
  dispatch(setUserLoading(true));
  try {
    const apiUrl = `${BASE_URL}/me`;
    const response: AxiosResponse<any> = await axios.get(apiUrl, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const currentUser = response.data.user;
    dispatch(setCurrentUser(currentUser));
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data.message || "An error occurred.");
    } else if (error.request) {
      console.error("No response received from the server.");
    } else {
      console.error(error.message);
    }
    dispatch(setUserLoading(false));
  }
};
