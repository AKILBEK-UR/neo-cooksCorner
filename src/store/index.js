import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import authReducer from "./Auth/authReducer";
import categoryReducer from "./Category/categoryReducer";
import recipreReducer from "./recipe/recipreReducer";
const store = configureStore({
    reducer:{
        auth: authReducer, 
        categories: categoryReducer,
        recipe: recipreReducer,
    },
});

export default store;