import {Endpoints} from "../endpoints"
import { axiosInstance } from "../instance"

export const fetchRecipesAPI = (value) => {
  const accessToken = localStorage.getItem('accessToken');
  return axiosInstance.get(Endpoints.RECIPES.RECIPES_LIST, {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
    },
    value
  });
};