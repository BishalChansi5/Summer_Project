import React from 'react'
import './home.scss'
import video from '../../images/video1.mp4'
import {MdFastfood} from 'react-icons/md'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'
import {AiOutlineAppstore} from 'react-icons/ai'

 const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Service
          </span>
          <h1 className='homeTitle'>
          Find happiness with us
          </h1>
        </div>
      
      <div className="cardDiv grid">
        <div className="destinationInput">
        <label htmlFor='food'>Search</label>
        <div className="input flex">
          <input type='text' placeholder='Enter items here...'/>
          <MdFastfood className="icon"/>
        </div>
      </div>

      </div>
      
      <div className="homeFooterIcons flex">
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
  )
}
export default Home