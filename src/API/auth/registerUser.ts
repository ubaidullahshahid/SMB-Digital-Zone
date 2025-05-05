import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { dispatch } from "@/store/store";
import {
  setAuthLoading,
  setCurrentUser,
} from "@/store/slices/currentUserSlice";
import { AuthPayload } from "@/types/authPayload";
import { BASE_URL } from "../../../config";

export const registerUser = async (data: AuthPayload): Promise<any> => {
  dispatch(setAuthLoading(true));
  try {
    const apiUrl = `${BASE_URL}/auth/register`;
    const response: AxiosResponse<any> = await axios.post(apiUrl, data);
    const res = response.data;
    console.log("res.user", res.user);
    dispatch(setCurrentUser(res.user));
    localStorage.setItem("token", JSON.stringify(res?.user?.token));
    toast.success(res?.message || "Registration successful.");
    return res;
  } catch (error) {
    const err = error as AxiosError<any>;
    if (err.response) {
      toast.error(err.response.data.message || "An error occurred.");
    } else if (err.request) {
      toast.error("No response received from the server.");
    } else {
      toast.error(err.message);
    }
    dispatch(setAuthLoading(false));
  }
};
