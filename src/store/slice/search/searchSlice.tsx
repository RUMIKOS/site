import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type searchState ={
	search:string
}
const initialState:searchState ={
	search:''
}
const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		addSearch(state, action:PayloadAction<string>) {
			state.search=action.payload
		},
        
	},
})

export const { addSearch  } = searchSlice.actions;
export default searchSlice.reducer
