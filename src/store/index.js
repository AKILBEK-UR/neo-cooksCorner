import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import authReducer from "./Auth/authReducer";
import categoryReducer from "./Category/categoryReducer";
import recipeReducer from "./recipe/recipeReducer";
const store = configureStore({
    reducer:{
        auth: authReducer, 
        categories: categoryReducer,
        recipe: recipeReducer,
    },
});

export default store;