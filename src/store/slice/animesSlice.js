import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const animesSlice = createSlice({
    name:'animes',
    initialState:{
        anime:[]
    },
    reducers:{
        setAnimes(state,action){
            console.log(action.payload);
            state.anime= action.payload
        }
    }
})

export const { setAnimes } = animesSlice.actions;
export default animesSlice.reducer