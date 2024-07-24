import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import authReducer from "./Auth/authReducer";
import categoryRedecuer from "./Category/categoryRedecuer";

const store = configureStore({
    reducer:{
        auth: authReducer, 
        category: categoryRedecuer,
    },
});

export default store;