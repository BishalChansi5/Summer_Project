import React,{useEffect} from 'react'
import './home.scss'
import video from '../../images/video1.mp4'
import {MdFastfood} from 'react-icons/md'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'
import {AiOutlineAppstore} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar/Navbar'

 const Home = () => {
useEffect(()=>{
      AOS.init({duration:2000})
},[])

  return (
    <>
    <Navbar/>
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Service
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>
          Find happiness with us
          </h1>
        </div>
      
      <div data-aos="fade-up" className="cardDiv grid">
        <div className="destinationInput">
        <label htmlFor='food'>Search for products and categories</label>
        <div className="input flex">
          <input type='text' placeholder='Enter items here...'/>
          <MdFastfood className="icon"/>
        </div>
      </div>

      </div>
      
      <div data-aos="fade-up" className="homeFooterIcons flex">
           <div className="rightIcons">
            <FiFacebook className="icon"/>
            <BsInstagram className="icon"/>
           </div>

           <div className='leftIcons'>
            <FaList className="icon"/>
            <AiOutlineAppstore className="icon"/>
           </div>
      </div>
    </div>
    </section>
    </>
  )
}
export default Home