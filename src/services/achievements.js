import { apiClient } from "./config";

export const apiGetAchievements = async() => {
return apiClient.get("/achievement");
};
export const apiAddAchievements = async (payload) => {
    return apiClient.post("/skills", payload);
};


export const apiGetAchievementsById = async (id) => {
    return apiClient.get(`/skills/${id}`)
};

export const apiUpdateAchievements = async (id) => {
    return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteAchievements = async (id) => {
    return apiClient.delete(`/skills/${id}`);
}