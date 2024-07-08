import React  from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css"
//import Apps from './effects/Apps';
//import { Rout } from './routers/Rout';
import { Routes1 } from './routers/Routes1';
//import { Routes } from 'react-router-dom';
import { BrowserRouter  } from 'react-router-dom';
//import { ToastContainer } from 'react-toastify';
const Virtualroot = ReactDOM.createRoot(document.getElementById('root'));
Virtualroot.render(
   // <div>
     //<Apps/>
       // <//ToastContainer/>
  //  </div>
  <BrowserRouter>
  
  <Routes1/>
  </BrowserRouter>
    
);
