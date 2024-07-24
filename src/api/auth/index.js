import { Endpoints } from "../endpoints";
import { axiosInstance } from "../instance";
import { iLoginRequest, iLoginResponse, iRegisterRequest, IRegisterResponse } from "./types";

export const login = (values) => axiosInstance.post(Endpoints.AUTH.LOGIN, values)
export const register = (values) => axiosInstance.post(Endpoints.AUTH.REGISTER, values)
export const logout = (values) => axiosInstance.post(Endpoints.AUTH.LOGOUT, values)
export const refresh = (values) => axiosInstance.post(Endpoints.AUTH.REFRESH, values);