import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useSelector } from 'react-redux';
const Addcontact = () => {
    const user = useSelector((state) => state.user.userInfo);
    const [phoneNumber,setPhoneNumber]=useState("");
    const [name,setName]=useState("");
    async function handleAddContact(e){
         e.preventDefault();
        if(!user ) return console.log("login first")
        const id=user._id;
        await axios.post(BASE_URL+`/addcontact/${id}`,{
            phoneNumber:phoneNumber,
            name:name
        })
    }
  return (
    <div>
     <div className='h-100 w-100 border-2 m-10'>
        <form className='m-20' onSubmit={handleAddContact}>
            <label>Enter The PhoneNumber</label><br></br>
            <input type='number'  className='h-10 w-50 border-2' value={phoneNumber} onChange={(e)=>{ const value = e.target.value;
                            setPhoneNumber(value === "" ? "" : Number(value));}}></input><br></br>
            <label>Eter the Contact Name</label><br></br>
            <input type='text'  className='h-10 w-50 border-2' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
            <button type="submit" className="border-2 px-4 py-2 mt-2">Submit</button>
        </form>
     </div>
    </div>
  )
}

export default Addcontact