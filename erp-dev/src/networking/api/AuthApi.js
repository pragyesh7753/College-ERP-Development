import { errorHandler, responseHandler } from "../../utils";
import ApiClient from "../ApiClient";
import { URLS } from "../url";

export const AuthApi = {
    login: async (data) => {
        try {
            const response = await ApiClient.post(URLS.AUTHENTICATION.LOGIN, data);
            console.log("login",response);
            return responseHandler(response);
        } catch (error) {
            console.log(error);
            return errorHandler(error);
        }
    }
}