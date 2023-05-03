import React from "react";
import './App.css';
import Home from "./Component/Home/Home";
import Navbar  from "./Component/Navbar/Navbar";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";



const App = () =>{
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
