import { Endpoints } from "../endpoints";
import { axiosInstance } from "../instance";

export const fetchRecipesAPI = (categoryId, page, size, sort) => {
  const accessToken = localStorage.getItem('accessToken');

  const queryString = new URLSearchParams({
    categoryId,
    page,
    size,
    sort: sort,
  })

  return axiosInstance.get(`${Endpoints.RECIPES.RECIPES_LIST}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
};
