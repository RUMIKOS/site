import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slice/favorite/favoriteSlice";
import categoryReducer from "./slice/categories/categorySlice";

export default configureStore({
    reducer:{
        favorite:favoriteReducer,
        category:categoryReducer
    },
    
})