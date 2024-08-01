import { apiClient, clearDetails } from "./config";



export const apiSignUp = async (payload) => {
    return apiClient.post("/auth/signup", payload);
};


export const apiLogin = async (payload) => {
    return apiClient.post("/auth/token/login", payload)

};

export const apiLogout = async () => {
    clearDetails();
  };

export const apiCheckUserNameExists = async (userName) => {
    return apiClient.get(`/${userName}`);
};
