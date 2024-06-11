import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../../Components/firebase"

type state ={
    email:string,
    password:string,
    isLoggedIn:boolean
}
const initialState:state = {
    email:'',
    password:'',
    isLoggedIn:false
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addUser(state,action:PayloadAction<state>){
            state.email = action.payload.email
            state.password = action.payload.password
            state.isLoggedIn = true
            localStorage.setItem('user',state.email)
            localStorage.setItem('isLoggedIn','true')
            createUserWithEmailAndPassword(auth,state.email,state.password)
                .then((user)=>console.log(user))
            
        },
        checkUser(state,action:PayloadAction<state>){
            state.email = action.payload.email
            state.password =action.payload.password
            state.isLoggedIn = true
            signInWithEmailAndPassword(auth,state.email,state.password)
                .then((user)=>console.log(user))
                .catch((error)=>console.log(error))
            
        },
        logOutUser(state){
            signOut(auth)
            state.isLoggedIn=false
            localStorage.removeItem('user')
			localStorage.setItem('isLoggedIn', 'false')
        }
    }
})
export const { addUser,checkUser,logOutUser } = authSlice.actions
export default authSlice.reducer