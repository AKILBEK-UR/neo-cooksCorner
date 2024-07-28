import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://cookscorner.fun/api",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const response = await axiosInstance.post(Endpoints.AUTH.REFRESH, {
              refreshToken,
            });
            const { accessToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return axiosInstance(originalRequest);
          } catch (e) {
            // Handle logout if refresh token fails
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/login'; // Redirect to login page
            return Promise.reject(e);
          }
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; // Redirect to login page
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );