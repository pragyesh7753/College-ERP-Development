import { errorHandler, responseHandler } from "../../utils";
import ApiClient from "../apiClient";
import { URLS } from "../url";

export const AuthApi = {
    login: async (data) => {
        try {
            const response = await ApiClient.post(URLS.AUTHENTICATION.LOGIN, data);
            console.log(response);
            return responseHandler(response);
        } catch (error) {
            console.log(error);
            return errorHandler(error);
        }
    }
}