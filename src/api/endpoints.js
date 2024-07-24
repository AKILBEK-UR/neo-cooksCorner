export const Endpoints = {
    AUTH: {
      LOGIN: "/v1/auth/login",
      REFRESH: "/v1/auth/refresh-token",
      REGISTER: "/v1/auth/register",
      LOGOUT: "/v1/auth/logout",
    },
    USERS: {
      LIST: "/v1/users",
      PROFILE: "/v1/users/me",
      UPDATE_PROFILE: "/v1/users/me",
      GET_BY_ID: "/v1/users/{userId}",
      GET_USER_RECIPES: "/v1/users/me/recipes",
      GET_SAVED: "/v1/users/me/recipes/saved",
      FOLLOW_USER: "/v1/users/{userId}/follow",
    },
    CATEGORIES: {
      LIST: "/v1/categories",
      NEW_CATEGORY: "/v1/categories",
    },
    IMAGE: {
      UPLOAD: "/v1/images/upload",
      DELETE: "/v1/images/{imageId}",
    },
    RECIPES: {
      RECIPES_LIST: "/v1/recipes",
      CREATE: "/v1/recipes",
      SAVE: "/v1/recipes/{recipeId}/save",
      LIKE: "/v1/recipes/{recipeId}/like",
      DETAILS: "/v1/recipes/{recipeId}",
    },
  };