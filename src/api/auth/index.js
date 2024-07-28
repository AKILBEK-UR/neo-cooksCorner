import { Endpoints } from "../endpoints";
import { axiosInstance } from "../instance";

export const login = (values) => axiosInstance.post(Endpoints.AUTH.LOGIN, values)
export const register = (values) => axiosInstance.post(Endpoints.AUTH.REGISTER, values)
export const logout = () => axiosInstance.post(Endpoints.AUTH.LOGOUT)
export const refresh = (values) => axiosInstance.post(Endpoints.AUTH.REFRESH, values);