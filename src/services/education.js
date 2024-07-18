
import { apiClient } from "./config";

export const apiGetEducation = async() => {
return apiClient.get("/education");
};

export const apiAddEducation = async (payload) => {
    return apiClient.post("/skills", payload);
};


export const apiGetEducationById = async (id) => {
    return apiClient.get(`/skills/${id}`)
};

export const apiUpdateEducation = async (id) => {
    return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteEducation = async (id) => {
    return apiClient.delete(`/skills/${id}`);
};
