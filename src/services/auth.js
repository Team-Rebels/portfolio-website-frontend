import {apiClient} from "./config"

export const apiSigUp = async(payload) => {
    return apiClient.post("/auth/signup" , payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/auth/token/login" , payload)

};

export const apiCheckUserNameExists = async(_userName) => {
    return apiClient.get(`/auth/$userName`);
};