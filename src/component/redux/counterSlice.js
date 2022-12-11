import { createSlice } from '@reduxjs/toolkit'
import { logOut } from './authSlice'



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    reducers: {
        increase: (state,action)=>{
            state.value += 1
        },

        decrease: (state,action)=>{
            state.value -= 1
        },
        increaseByAmount: (state,action)=>{
            state.value += action.payload
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(logOut,(state)=>{
            state.value= 0
        })
    }
})

export const {increase,decrease,increaseByAmount}=counterSlice.actions;

export default counterSlice.reducer