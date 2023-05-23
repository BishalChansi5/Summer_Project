import React,{useEffect} from 'react'
import './footer.scss'
import video2 from '../../images/video3.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
  },[])
  return (
    <section className='footer'>
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type='video/mp4'></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>Keep in touch</small>
                    <h2>Buy Your Happiness</h2>
                </div>
                <div className="inputDiv flex">
                    <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
                    <button data-aos="fade-up" className='btn flex' type='submit'>
                        SEND<FiSend className='icon'/>
                    </button>
                </div>
            </div>
            <div className="footercard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className='logo flex'>
                            <MdOutlineLocalGroceryStore className='icon'/>Our Store.
                        </a>
                    </div>
                    <div data-aos="fade-up" className="footerparagraph">
                    We highly value your feedback. See what our clients are saying about us.
                    Client success is always a priority for us. We strive to deliver high-quality solutions that are tailored specifically to our clients’ needs and helped them achieve their goals.
                    </div>
                    <div data-aos="fade-up" className="footerSocials flex">
                        <AiOutlineTwitter className='icon'/>
                        <BsInstagram className='icon'/>
                        <BsFacebook className='icon'/>
                        <AiFillYoutube className='icon'/>
                    </div>
                </div>
                <div className="footerLinks grid">
                    <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className="linkGroup">
                        <span className="groupTitle">
                            Available products
                        </span>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Drinks
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Noodles
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Biscuits
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Chocolates
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Spicies
                        </li>
                    </div>
                </div>
                <div className="footerDiv flex">
                  <small>Website for shopping</small>
                  <small>COPYRIGHTS RESERVED - LUNITIC 2023</small>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer