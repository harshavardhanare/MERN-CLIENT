import { useState } from "react";
import Context from "./components/Context"
export default function Mycomponents(){
    const [text,setText]=useState(Context)
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("hello HARsha")}>click</button>
        
        </div>
    )
}