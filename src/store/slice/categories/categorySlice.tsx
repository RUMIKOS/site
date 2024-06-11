import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import store from '../..'
type cat = [
	category:string
]
type categoryState = {
	category:cat[]
}
const initialState:categoryState = {
	category:[]
}
const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		addCategory(state, action) {
			console.log(action.payload);
			
			state.category.push(action.payload)
		},
	},
})
export const { addCategory } = categorySlice.actions
export default categorySlice.reducer
