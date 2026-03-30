import React, { use, useState } from 'react'
import{ useNavigate, Link }from "react-router-dom"
import { BASE_URL } from '../utils/constant';
import axios from "axios"
const Signup = () => {
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const [lastName,setlastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [balance,setBalance]=useState(0);
    async function handleSubmit(e){
         e.preventDefault();
        //  console.log(firstName,lastName,email,password,phoneNumber,balance)
        const res=await axios.post(BASE_URL+"/signup",{
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            balance
        }, { withCredentials: true })
        navigate("/login")
    }
     const handleChange = (e) => {
    const value = e.target.value === "" ? 0 : Number(e.target.value);
    setBalance(value);
  };
  return (
    <div>
    <div className='flex items-center justify-center min-h-screen'>
       <div className='h-130 w-100 border-2 p-10'>
           <form onSubmit={handleSubmit}>
        <label>Enter firstName</label><br></br>
        <input className='h-10 w-80 border-2' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input><br></br>
         <label>Enter lastName</label><br></br>
        <input className='h-10 w-80 border-2' value={lastName} onChange={(e)=>setlastname(e.target.value)}></input><br></br>
         <label>Enter Email</label><br></br>
        <input className='h-10 w-80 border-2' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
         <label>Enter password</label><br></br>
        <input className='h-10 w-80 border-2' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
         <label>Enter phoneNumber</label><br></br>
        <input className='h-10 w-80 border-2' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input><br></br>
         <label>Enter balance</label><br></br>
        <input className='h-10 w-80 border-2' value={balance} onChange={handleChange}></input><br></br>
        {/* <Link to={"/login"}><button type="submit" className="border-2 px-4 py-2 mt-2">Submit</button></Link> */}
        <button type="submit" className="border-2 px-4 py-2 mt-2">Submit</button>
        </form>
       </div>
    </div>
    </div>
  )
}

export default Signup