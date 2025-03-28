import { errorHandler, responseHandler } from "../../utils";
import ApiClient from "./ApiClient";
import { URLS } from "./url";

interface LoginData {
  username: string;
  password: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const AuthApi = {
  login: async (data: LoginData): Promise<ApiResponse<any>> => {
    try {
      const response = await ApiClient.post(URLS.AUTHENTICATION.LOGIN, data);
      console.log("login", response);
      return responseHandler(response);
    } catch (error) {
      console.log(error);
      return errorHandler(error);
    }
  }
}