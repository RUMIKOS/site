import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAnimes = createAsyncThunk(
    'anime/fetchAnimesById',async(params)=>{
        const { categoryParametr, searchParametr } = params
        const { data } = await axios.get(
					`https://665420081c6af63f46767a91.mockapi.io/1/title?${categoryParametr}${searchParametr}`
				);
                return data
    }
)

const animesSlice = createSlice({
	name: 'animes',
	initialState: {
		anime: [],
	},
	reducers: {
		setAnimes(state, action) {
			console.log(action.payload)
			state.anime = action.payload
		},
	},
	
})

export const { setAnimes } = animesSlice.actions;
export default animesSlice.reducer