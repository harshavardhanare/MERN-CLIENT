import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { apiUrl,filterData } from "./data";
import {Cards} from "./Cards"
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
export default function Apps(){
    const [courses,setCourses]=useState(null)
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const res=await fetch(apiUrl);
                const output=await res.json();
                //save data into a variable
            setCourses(output.data);

            }
            catch(error){
            toast.error("somethibbng is wrong")
            }
        }
        fetchData();
    },[]);
   // const []
    return(
    <div>
    <Navbar/>
    <Filter
    filterData={filterData}
    />
    <Cards courses={courses}/>
    </div>
    )
}