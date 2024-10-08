import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slice/favorite/favoriteSlice";
import categoryReducer from "./slice/categories/categorySlice";
import searchReducer from "./slice/search/searchSlice";
import animesSlice from './slice/animesSlice'
import authSlice from "./slice/auth/authSlice";
import messageSlice from "./messageSlice";
export const store = configureStore({
    reducer:{
        favorite:favoriteReducer,
        category:categoryReducer,
        search:searchReducer,
        anime:animesSlice,
        auth:authSlice,
        message:messageSlice
    },
    
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;