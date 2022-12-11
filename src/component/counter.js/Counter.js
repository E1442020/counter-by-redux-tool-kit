import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../redux/authSlice';
import { decrease, increase, increaseByAmount } from '../redux/counterSlice';

export default function Counter() {
    const state =useSelector((state)=>state);
    const dispatch =useDispatch();

    const isLoggin=()=>{
        return state.auth.isLogin;
    }

    const loginhand =(status)=>{
        if(status){
            dispatch(logOut())
        }else{
            dispatch(logIn())
        }
    }
    
    const increment =()=>{
        dispatch(increase())

    }

    const decrement =()=>{
        dispatch(decrease())

    }

    const incrementByAmount =()=>{
        dispatch(increaseByAmount(100))

    }
  return (
    <>
    {isLoggin()&&(
        <>
        <h3>counter:{state.counter.value}</h3>
    <button onClick={increment}>increase +</button>
    <button onClick={decrement}>decrease -</button>
    <button onClick={incrementByAmount}>increase by amount 100</button>
        </>
    )}
    <button className='log' onClick={()=>loginhand(isLoggin())}>
        {isLoggin() ?'logout' :'login'}
    </button>
    </>
  )
}
