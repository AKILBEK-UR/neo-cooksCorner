import { Endpoints } from "../endpoints";
import { axiosInstance } from "../instance";
const accessToken = localStorage.getItem('accessToken'); 
  export const category = () => axiosInstance.get( Endpoints.CATEGORIES.LIST, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })