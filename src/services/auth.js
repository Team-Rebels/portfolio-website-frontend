import {apiClient} from "./config"

export const apiSigUp = async(payload) => {
    return apiClient.post("/auth/signup" , payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/auth/login" , payload)

};

export const apiCheckUserNameExists = async(userName) => {
    return apiClient.get(`/auth/$userName`);
};