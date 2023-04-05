import React from 'react'
import { useState } from 'react'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {IoMdCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import './navbar.scss';


 const Navbar = () => {
    const [active, setActive]= useState ('navBar')
    //Function to togggle navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
     //Function to close navbar
     const closeNavbar = () =>{
        setActive('navBar')
    }
  return (
   <section className='navBarSection'>
    <header className='header flex'>
        <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <h1><MdOutlineLocalGroceryStore className='icon'/> Our Store.</h1>
          </a>
        </div>

    <div className={active}>
        <ul className="navLists flex">
            <li className="navItem">
                <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">About us</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Category</a>
            </li>
            <button className='btn'>Order</button>
        </ul>
        <div onClick={closeNavbar} className="closeNavbar">
            <IoMdCloseCircle className='icon'/>
        </div>
    </div>
    <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon'/>
    </div>
    </header>

   </section>
  )
}
export default Navbar