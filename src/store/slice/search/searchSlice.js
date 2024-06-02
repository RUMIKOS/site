import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
	name: 'search',
	initialState: {
        search:''
    },
	reducers: {
		addSearch(state, action) {
			state.search=action.payload
		},
        
	},
})

export const { addSearch , setFilters } = searchSlice.actions;
export default searchSlice.reducer