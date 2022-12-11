import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name: 'auth',
    initialState: {isLogin:false},
    reducers: {
      
        logIn :(state,action)=>{
            state.isLogin= true

        },

        
        logOut :(state,action)=>{
            state.isLogin= false


        },


    }})
export const{logIn,logOut}=authSlice.actions
    export default authSlice.reducer