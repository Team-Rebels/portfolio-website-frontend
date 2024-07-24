import { apiClient } from "./config";

export const apiGetAchievements = async() => {
return apiClient.get("/achievement");
};
export const apiAddAchievements = async (payload) => {
    return apiClient.post("/achievement", payload);
};


export const apiGetAchievementsById = async (id) => {
    return apiClient.get(`/achievement/${id}`)
};

export const apiUpdateAchievements = async (id, payload) => {
    return apiClient.patch(`/achievement/${id}`, payload);
};

export const apiDeleteAchievements = async (id) => {
    return apiClient.delete(`/achievement/${id}`);
}