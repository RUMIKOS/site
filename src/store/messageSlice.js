import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:'message',
    initialState:{
        message:[{user:'',message:''}]
    },
    reducers:{
        addMessage(state,action){
            state.message.push(action.payload)
            console.log(state.message);
        }
    }
})


export const {addMessage} = messageSlice.actions;
export default messageSlice.reducer