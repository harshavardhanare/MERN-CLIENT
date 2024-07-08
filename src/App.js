import { useState } from "react";
import React from "react";
function App(){
    const [show,setShow]=useState({
        username:"",
        password:"",
    })
    
    const [data,setData]=useState({
        username:"",
        password:""
    })
    // const [list,setList]=useState([])
    function detailHandler(e)
    {
    setData((prevData)=>({...prevData,[e.target.name]:e.target.value}))

    }
    function submitHandler(e){
        e.preventDefault();
        // setList([...list,data])
        // username=data.username;
        // pass=data.password;
        setData({});
       setShow({...data})
  }

    
    return(
        <div>
           username: <input type="text" name="username" onChange={detailHandler} ></input>
           password:<input type="text" name="password" onChange={detailHandler}></input>
            <button onClick={submitHandler}>submit</button>

            <div>
                <h1>{show.username}</h1>
                <h1>{show.password}</h1>
            </div>
        </div>
    )

}

export default App