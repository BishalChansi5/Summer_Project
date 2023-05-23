import React from "react";
import './App.css';
import Home from "./Component/Home/Home";
import Navbar  from "./Component/Navbar/Navbar";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";



const App = () =>{
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="*" element={
        <div>
          <h1>404 NOT FOUND</h1>
        </div>
      } />
    
    </Routes>
    <Main/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;