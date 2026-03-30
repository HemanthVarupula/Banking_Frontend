import { withdrawAmount } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const Withdraw=()=>{
     const [updatebalance,setUpdateBalance]=useState(0)
      const user = useSelector((state) => state.user.userInfo);
      const dispatch=useDispatch();
        async function handleWithdraw(){
        if(!user ) return console.log("login first")
        const id=user._id;
        await axios.post(BASE_URL+`/withdraw/${id}`,{
            withdrawamout:updatebalance
        },{withCredentials:true})
        dispatch(withdrawAmount(Number(updatebalance)));
         setUpdateBalance(0);
         console.log(req.body);
    }
    
    return(
        <>
          <h1>Hii you want to withdraw Money</h1>
            <div className='h-100 w-100 border-2 m-10'>
        <div className='p-19'>
            <h1>Enter Amount to Withdraw</h1>
        <input className='h-10 w-50 border-2' value={updatebalance} onChange={(e)=> { const value = e.target.value;
                            setUpdateBalance(value === "" ? "" : Number(value));}}></input><br></br> <br></br>
        <button className='cursor-pointer h-20 w-30 border-2' onClick={handleWithdraw}>WithdrawMoney Money</button>
        </div>
        </div>
        </>
    )
}

export default Withdraw;