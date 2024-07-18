import { apiClient } from "./config";

export const apiGetExperience = async () => {
    return apiClient.get("/experience");
};
export const apiAddExperience = async (payload) => {
    return apiClient.post("/skills", payload);
};


export const apiGetExperienceById = async (id) => {
    return apiClient.get(`/skills/${id}`)
};

export const apiUpdateExperience = async (id) => {
    return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteExperience = async (id) => {
    return apiClient.delete(`/skills/${id}`);
};
