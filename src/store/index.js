import { configureStore } from "@reduxjs/toolkit";
import favoritereducer from "./slice/favorite/favoriteSlice";

export default configureStore({
    reducer:{
        favorite:favoritereducer
    }
})