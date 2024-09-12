import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type fav ={
	anime:{id?:number,name?:string,img?:string,janri?:string[],series?:string[],type?:string,voices?:string[],year?:string}
}
export type {fav}
interface favoriteState  {
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
			console.log(action.payload);
			
			state.favorite.push({
				anime: action.payload,
			})
		},
		removeFavorite(state, action:PayloadAction<{anime:{id:number}}>) {
			console.log(action.payload);
			state.favorite = state.favorite.filter(el => el.anime.id !== action.payload.anime.id)
		},
	},
})

export const { addFavorite , removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer