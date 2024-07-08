import { useState,useContext, createContext } from "react";
import { AppContextProvider } from "./components/AppContext";
import './input.css'

export default function Feedbackapi(){
    const [list,setList]=useContext(AppContextProvider)
    const [data,setdata]=useState({})
  
let temp
function feedbackHandler(e){

setdata(
    {...data,[e.target.name]:e.target.value})

}
function submitHandler(){
   
  
          
    };

       return( 
        <div className="w-full min-h-screen flex justify-center items-center" >
     <div className="h-[50vh]   w-[30vw] border-black border-2  flex justify-center ">
            <form>
        <h1 className="text-black  text-2xl font-bold px-20">Login</h1>
       
        <div className=" rounded-md border-[black] block mt-1vmin w-full m"> Name:<input className="hrfhb gap-1 border-[black] border-2  shadow-lg  " type="text" name='name' onChange={feedbackHandler}></input></div>
        <div>Rollno:<input type="text"  name="rno" onChange={feedbackHandler}></input></div>
        <div>number:<input type="text"  name="num" onChange={feedbackHandler}></input></div>
        <div>feedback:<input type="text" name="feedback" onChange={feedbackHandler}></input></div>
      <div>  <button type='submit'onSubmit={submitHandler}>submit</button></div>

        </form>
        
        </div>
        </div>
        )
    //<Feedbackapi.Provider value={temp}>child</Feedbackapi.Provider>)

}

