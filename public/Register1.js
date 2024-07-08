import React from "react";
export  const Login1=createContext();
export function Register(){
    return(
        <div>
   Name: <input type="text" name="name"></input>
  Username: <input type="text" name="uname"></input>
    Password: <input type="text" name="pass"></input>
   Number: <input type="text"name="numb"></input>
    </div>
    )

}