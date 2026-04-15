import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
const Login=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [email,setEmail]=useState("hemanthvarupula@gmail.com");
    const [password,setPassword]=useState("Mh143");
    const handlelogin=async(e)=>{
         e.preventDefault();
         const res=await axios.post(BASE_URL+"/login",{
            email,
            password
         },{withCredentials:true})
         console.log(res)
         if(res.data.message==="login sucessful"){
            dispatch(setUser(res.data.user));
            navigate("/home")
         }
    }
    return(
        <>
            <h1>Welcome To The Banking Page !!</h1>
          <div className='flex items-center justify-center min-h-screen'>
       <div className='h-60 w-90 border-2 p-5'>
       <form onSubmit={handlelogin}>
        <label>Enter Email</label><br></br>
        <input className='h-10 w-80 border-2' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <label>Enter Password</label><br></br>
        <input className='h-10 w-80 border-2' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <button type="submit" className="border-2 px-4 py-2 mt-2">Submit</button>
       </form>
       </div>
    </div>
        </>
    )
}

export default Login
