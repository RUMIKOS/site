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
			state.favorite = state.favorite.filter(el => el.anime.id !== action.payload)
		},
	},
})

export const {addFavorite,removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer