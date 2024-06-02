import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slice/favorite/favoriteSlice";
import categoryReducer from "./slice/categories/categorySlice";
import searchReducer from "./slice/search/searchSlice";
import animesReducer from './slice/animesSlice'
export default configureStore({
    reducer:{
        favorite:favoriteReducer,
        category:categoryReducer,
        search:searchReducer,
        anime:animesReducer
    },
    
})