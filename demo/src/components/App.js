import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreateProduct from '../pages/CreateProduct';
export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/' element={<Layout/>}>
            <Route index="/" element={<Home/>}/>
            <Route path='contact'  element={<Contact/>} />
            <Route path='login'  element={<Login/>} />
            <Route path='register'  element={<Register/>} />
            <Route path='create/product'  element={<CreateProduct/>} />
            <Route/>
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}


