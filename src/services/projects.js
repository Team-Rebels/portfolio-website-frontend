import { apiClient } from "./config";

export const apiGetProjects = async () => {
    return apiClient.get("/projects");
};
export const apiAddProjects = async (payload) => {
    return apiClient.post("/skills", payload);
};


export const apiGetProjectsById = async (id) => {
    return apiClient.get(`/skills/${id}`)
};

export const apiUpdateProjects = async (id) => {
    return apiClient.patch(`/skills/${id}`);
};

export const apiDeleteProjects = async (id) => {
    return apiClient.delete(`/skills/${id}`);
}
