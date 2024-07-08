import React from 'react'
import { useState } from 'react'
import { AppContext } from './AppContext'

export const Feedback = () => {
    const [data,setData]=useState({})
const [list,setList]=useState([])
const feedbackHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler =(e)=>{
    setList([...list,data])
    setData({})
    let arr = list.map((item, index) => {
        let nam = item.name;
        let rno = item.rno;
        const temp = [nam, rno];
        return temp;
    });
   
};
const {isNav}=React.useContext(AppContext)
   


  return (
    <div><form>
        
        Name:<input type="text" name='name' onChange={feedbackHandler}></input>
        Rollno:<input type="text"  name="rno" onChange={feedbackHandler}></input>
        number:<input type="text"  name="num" onChange={feedbackHandler}></input>
        feedback:<input type="text" name="feedback" onChange={feedbackHandler}></input>
        <button type='submit'onSubmit={submitHandler}>submit</button>

        </form>
        <div>
        
        </div>
        </div>
  )
}
