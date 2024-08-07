
import axios from "axios"


const baseurl = import.meta.env.VITE_BASE_URL
export const apiClient = axios.create({
    baseURL: baseurl, 
    
});

export const getDetails = () => {
  const user = {};

  user.token = localStorage.getItem("accessToken");
  user.firstName = localStorage.getItem("firstName");
  user.lastName = localStorage.getItem("lastName");
  user.userName = localStorage.getItem("userName");

  return user;
};

export const clearDetails = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("userName");
};

//Interceptor to add token to authorization header for every request
apiClient.interceptors.request.use(
  (config) => {
    // Check if there's a token in localStorage
    const { token } = getDetails();
    if (token) {
      // Set the token in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If request error (e.g., network failure), handle it here
    return Promise.reject(error);
  }
);

// Another interceptor to handle response errors
apiClient.interceptors.response.use(
  (response) => {
    // If a response is received, just return it unchanged
    return response;
  },
  (error) => {
    // Ensure error.response exists before accessing its properties
    if (error.response) {
      if (error.response.status === 401) {
        // Remove accessToken from local storage
        clearDetails();
        // Handle 401 error (e.g., logout user and redirect to login page)
        window.location.replace('/login');
      }
      if (error.response.status === 404) {
        toast.error('Not found');
      }
    } else {
      // Handle network errors or other errors that don't have a response
      console.error('Network error or no response:', error);
    }
    // Return the error so the promise is rejected
    return Promise.reject(error);
  }
);