import { apiClient } from "./config";

export const apiGetExperience = async() => {
    return apiClient.get("/experience");
    };