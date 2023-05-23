import React from 'react'
import { useState } from 'react'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {IoMdCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'
import './navbar.scss';
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';


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
    const [qualitycount, setqualitycount] = useState(0)
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
        <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       Grocery
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                {/* <a href="#" className="navLink">Grocery</a> */}
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Vegetables & Fruits</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Eggs & Meats</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Bakery & Dairy</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Beverage</a>
            </li>
            <button className='btn'>
                <AiOutlineShoppingCart/>
                <span className='qty'>{qualitycount}</span>
            </button>
            <button className='btn'>
                <AiOutlineUserAdd/>
            </button>

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