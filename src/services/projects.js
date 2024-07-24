import { apiClient } from "./config";

export const apiGetProjects = async () => {
    return apiClient.get("/projects");
};
export const apiAddProjects = async (payload) => {
    return apiClient.post("/projects", payload);
};


export const apiGetProjectsById = async (id) => {
    return apiClient.get(`/projects/${id}`)
};

export const apiUpdateProjects = async (id, payload) => {
    return apiClient.patch(`/projects/${id}`, payload);
};

export const apiDeleteProjects = async (id) => {
    return apiClient.delete(`/projects/${id}`);
}
