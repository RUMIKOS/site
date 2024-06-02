import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		favorite: [],
	},
	reducers: {
		addFavorite(state, action) {
			state.favorite.push({
				anime: action.payload,
			})
		},
		removeFavorite(state, action) {
			console.log(action.payload.anime.id);
			state.favorite = state.favorite.filter(el => el.anime.id !== action.payload.anime.id)
		},
	},
})

export const { addFavorite , removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer