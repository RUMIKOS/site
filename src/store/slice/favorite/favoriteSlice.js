import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        favorite:[]
    },
    reducers:{
        addFavorite(state,action){
            console.log(state,action);
            state.favorite.push({
                state
            })
        },
        removeFavorite(state,action){

        }
    }
})

export const {addFavorite,removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer