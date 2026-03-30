import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constant';
import { useSelector } from 'react-redux';

const History = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [data,setData]=useState([]);
  if(!user ) return console.log("login first")
     const id=user._id;
     const fetchData = async () => {
    const res = await axios.get(BASE_URL + `/gethistory/${id}`);
    console.log(res);
    setData(res.data);
  };
  useEffect( ()=>{
    fetchData()
  },[])
  return (
    <div>
    <div>
       {data?.senderhistory?.map((item, index) => (
  <div key={index}>
    <p>Amount: {item.amount}</p>
    <p>Time: {new Date(item.createdAt).toLocaleString()}</p>
  </div>
))}
    </div>
    </div>
  )
}

export default History