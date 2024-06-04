import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type fav ={
	anime:{}
}
type favoriteState = {
	favorite:fav[]
}

const initialState :favoriteState={
	favorite:[]
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite(state, action:PayloadAction<{}>) {
			state.favorite.push({
				anime: action.payload,
			})
		},
		removeFavorite(state, action:PayloadAction) {
			dasdsa
			console.log(action.payload);
			state.favorite = state.favorite.filter(el => el.anime.id !== action.payload.anime.id)
		},
	},
})

export const { addFavorite , removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer