import { PayloadAction, createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
interface Iparams {
	searchParametr:string,
	categoryParametr:string
}
export const fetchAnimes = createAsyncThunk(
	'anime/fetchAnimes',
	async function ({searchParametr, categoryParametr}:Iparams) {
		const response = await fetch(
			`https://665420081c6af63f46767a91.mockapi.io/1/title?${categoryParametr}${searchParametr}`
		)
		const data:[] = await response.json()
		return data
	}
)
interface Istate {
	anime:[],
	status:boolean,
	error:string
}
const initialState:Istate = {
	anime: [],
	status: false,
	error: '',
}
const animeSlice = createSlice({
	name:'anime',
	initialState,
	reducers:{

	},extraReducers:(builder)=>{
        builder
				.addCase(fetchAnimes.pending, (state) => {state.status = true})
				.addCase(fetchAnimes.fulfilled, (state,action) => {
                    state.status = true
                    state.anime=action.payload
                })
				.addCase(fetchAnimes.rejected, (state) => {
                    state.anime = [];
                    state.status = false;
                    state.error ='Error';
                })
    }
})
export default animeSlice.reducer