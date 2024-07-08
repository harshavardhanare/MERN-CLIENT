import React from 'react'
import { useState } from "react";
import { Feedbackapi,ContextProvider } from "./Feedbackapi";

    

export const Retfbiapi = () => {
  return (
    <div>
    
        <Feedbackapi.Consumer></Feedbackapi.Consumer>
    
    </div>
  )
}
