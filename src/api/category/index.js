import { Endpoints } from "../endpoints";
import { axiosInstance } from "../instance";

export const categories = axiosInstance.get(Endpoints.CATEGORIES.LIST)