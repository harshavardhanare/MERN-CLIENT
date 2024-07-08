import { useState } from "react"
import React from "react"
export default function RegExp(){
    const [data,setData]=useState({
        username:"",
        password:"",
        phone:"",
        email:""
    });
    const [list,setList]=useState([])
    const [login,setLogin]=useState({
        username:"",
        password:"",

    })
    const [logs,setLogs]=useState([])
function formHandler(e){
setData((prevData)=>({...prevData,[e.target.name]:e.target.value}))

}
function submitHandler(){
    setList(...list,{data})
    setData({})
}
function loginHandler(e){
    setLogin(()=>({...prevLogin,[e.target.name]:e.target.value}))
}
function submitLogin(e)
{
         setLogs([...logs,login])
         setLogin({})
}
return(
    <div>
       uname: <input type="text" name="username" onChange={formHandler}></input>
      pass:  <input type="text" name="password" onChange={formHandler}></input>
       phone: <input type="text" name="phonenumber"onChange={formHandler}>
        
        </input>
       email: <input type="text"name="email"onChange={formHandler}></input>
       <button type="submit" onClick={submitHandler}>register</button>
       <div>
        <input type="text" onChange={loginHandler}></input>
        <input type="text"onChange={loginHandler}></input>
        <button onClick={submitLogin}>loginHandler</button>
        <p>

        </p>
       </div>
    </div>
)
}