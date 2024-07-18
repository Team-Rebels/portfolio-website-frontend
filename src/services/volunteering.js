import { apiClient } from "./config";

export const apiGetVolunteering = async () => {
    return apiClient.get("/volunteering");
};
export const apiAddVolunteering = async (payload) => {
    return apiClient.post("/skills", payload);
};


export const apiGetVolunteeringById = async (id) => {
    return apiClient.get(`/skills/${id}`)
};

export const apiUpdateVolunteering = async (id) => {
    return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteVolunteering = async (id) => {
    return apiClient.delete(`/skills/${id}`);
}
