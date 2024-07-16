import axios from "axios"


const baseurl = import.meta.env.VITE_BASE_URL
export const apiClient = axios.create({
    baseURL: baseurl, 
    // withCredentials: true
});