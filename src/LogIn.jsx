import { useState,useEffect } from 'react'
import './App.css'
import {info} from "./info"
import { useNavigate } from 'react-router-dom';

function LogIn({setUser}) {
  const [count, setCount] = useState("");
  const [state, setState] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);

  const nav = useNavigate();
  
  const handler =(e)=>{
    setCount(e.target.value);
    console.log(e.target.value);
    }
  
  const handlers =(e)=>{
    setState(e.target.value);
    console.log(e.target.value);
  }
const handlebar=()=>{
    if(info.username == count && info.password == state){
      setMsg("logIn successfully");
      setShow(true);
      setUser(count)
  }else if(count== "" && state ==""){
    setMsg("Pls Enter Username & Password")
  }else{
    setMsg("Invalid Username & Password");
    setCount("")
    setState("")
  }
  
}
  return show===true ? nav("/dashboard"):(
    <>
    <div className="App">
      <label htmlFor="username">Username</label>
      <input type="text" id='username' value={count} onChange={(e)=>handler(e)} />
      </div>
      <div className="App">
      <label htmlFor="pwd">Password</label>
      <input type="password" id='pwd' value={state} onChange={(e)=>handlers(e)}/>
    </div>
    {msg}
    <div className="App">
      <button  onClick={()=>handlebar()}>Submit</button>
    </div>
    
    </>
  )
}

export default LogIn;
