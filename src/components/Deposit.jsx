import React, { useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from '../utils/userSlice';
import { BASE_URL } from '../utils/constant';
const Deposit = () => {
    const [updatebalance,setUpdateBalance]=useState(0)
    const user = useSelector((state) => state.user.userInfo);
    const dispatch=useDispatch();
    async function handleDeposit(){
        if(!user ) return console.log("login forst")
        const id=user._id;
        await axios.post(BASE_URL+`/deposit/${id}`,{
            updatebalance
        },{withCredentials:true})
        dispatch(updateBalance(Number(updateBalance)));
    }
  return (
    <div>
        <div className='h-100 w-100 border-2 m-10'>
        <div className='p-19'>
            <h1>Enter Amount to Deposit</h1>
        <input className='h-10 w-50 border-2' value={updatebalance} onChange={(e)=>setUpdateBalance(e.target.value)}></input><br></br> <br></br>
        <button className='cursor-pointer h-20 w-30 border-2' onClick={handleDeposit}>Add Money</button>
        </div>
        </div>
    </div>
  )
}

export default Deposit