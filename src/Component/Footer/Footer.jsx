import React from 'react'
import './footer.scss'
import video2 from '../../images/video3.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type='video/mp4'></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small>Keep in touch</small>
                    <h2>Buy Your Happiness</h2>
                </div>
                <div className="inputDiv flex">
                    <input type='text' placeholder='Enter Email Address'/>
                    <button className='btn flex' type='submit'>
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
                    <div className="footerparagraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium at illo deleniti delectus vero nostrum odio. Velit voluptatem modi dolore! Animi, iusto! Fugit dolorem tenetur ea provident vitae quas.
                    </div>
                    <div className="footerSocials">
                        <AiOutlineTwitter className='icon'/>
                        <BsInstagram className='icon'/>
                        <BsFacebook className='icon'/>
                        <AiFillYoutube className='icon'/>
                    </div>
                </div>
                <div className="footerLinks grid">
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Services
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className='icon'/>
                            Payment
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer