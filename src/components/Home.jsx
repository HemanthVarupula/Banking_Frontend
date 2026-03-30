import { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Addcontact from "./Addcontact";
import History from "./History";
const Home=()=>{
    const [showDeposit, setShowDeposit] = useState(false);
    const [showWithdraw,setWithdraw]=useState(false)
    const [showAddcontact,setShowAddcontact]=useState(false)
    const [showHistory,setSetShowHistory]=useState(false)
    function handleDeposit(){
         setShowDeposit((prev) => !prev);
    }
    function handleWithdraw(){
        setWithdraw((prev)=>!prev)
    }
    function handleAddcontact(){
      setShowAddcontact((prev)=>!prev)
    }
    function handleHistory(){
      setSetShowHistory((prev)=>!prev)
    }
    return(
        <>
        <h1>Welcome To Hemanth Banking Application</h1>
        <button className="h-10 w-40 border-2 m-5 cursor-pointer" onClick={handleDeposit}>Deposit</button>
        <button className="h-10 w-40 border-2 m-5 cursor-pointer" onClick={handleWithdraw}>Withdraw</button>
        <button className="h-10 w-40 border-2 m-5 cursor-pointer" onClick={handleAddcontact}>Add Contact</button>
        <button className="h-10 w-40 border-2 m-5 cursor-pointer" onClick={handleHistory}>History</button>
              {showDeposit && (
        <div>
          <Deposit />
        </div>
      )}
      {showWithdraw && (
        <div>
        <Withdraw/>
        </div>
      )}
      {
        showAddcontact&&(
          <div>
            <Addcontact/>
          </div>
        )
      }
      {
        showHistory&&(
          <div>
            <History/>
          </div>
        )
      }
        </>
    )
}

export default Home