import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faXTwitter,faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faDownload, faEnvelopeOpenText, faLocationDot, faMobile, } from '@fortawesome/free-solid-svg-icons';
import "./Section1.css";
import profilePic from '../assets/profilepic.jpg';


export default function Section1() {
  const googleCalendarLink = "https://calendar.google.com/calendar/u/0/r/eventedit/NWtmNnE4cHJpNTIzaWV1MWNrNmdxbzc1cGYgbmFrdWxob2dlQG0";


  return (
   
    <div className="section123">
    <div className="container section1">
      <div className="bostami-parsonal-info-img">
      <img className='profilepic' src={profilePic} alt='Profile' />
      </div>
      
     
      <h4>Nakul Hoge</h4>
      <span >Full Stack Developer</span>
      
        <ul className="socialaccount">
          <li>
            <a href="https://www.facebook.com/yashpol7777" target="_blank" style={{ color: 'rgb(23, 115, 234)' }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://x.com/yashpol09257286" target="_blank" style={{ color: 'black' }}>
              {/* <FontAwesomeIcon icon={faTwitter} /> */}
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yp_7777/?hl=en" target="_blank" style={{ color: 'rgb(225, 42, 114)' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yash-pol-126867220/" target="_blank" style={{ color: 'rgba(0, 119, 181, 1)' }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
     
      <div className='contact'>
        <div className="contactlist">
      <div className="icon" style={{ color: 'rgb(233, 59, 129)', fontSize: '22px' }}>
          <FontAwesomeIcon icon={faMobile} />
        </div>
        <div className="text">
          <span>Phone</span>
         
          <p><a href="tel:+919172880428">+919172880428</a></p>
        </div>
        </div>


        <div className="contactlist">
        <div className="icon" style={{ color: 'rgb(106, 181, 185)', fontSize: '22px' }}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </div>
        <div className="text">
          <span>Email</span>
          <p> <a href="mailto:nakulhoge@gmail.com">nakulhoge@gmail.com</a></p>
         
        </div>
        </div>

        <div className="contactlist">
        <div className="icon" style={{ color: 'rgb(253, 117, 144)', fontSize: '22px' }}>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className="text">
          <span>Location</span>
          <p> <a href="https://www.google.com/maps/search/?api=1&query=Pune,India" target="_blank">Pune, India</a></p>
        </div>
        </div>

        <div className="contactlist">
        <div className="icon" style={{ color: 'rgb(193, 124, 235)', fontSize: '22px' }}>
          <FontAwesomeIcon icon={faCalendarDay} />
        </div>
        <div className="text">
          <span>Birthday</span>
          <p>  <a href={googleCalendarLink} target="_blank">Jan 6, 2002</a></p>
        </div>
        </div>
      </div>
      <div className='Button1'>
      <FontAwesomeIcon icon={faDownload} />
      <a href="/resume.pdf" download="Nakul_H_Resume.pdf">
            <button>Download CV</button>
          </a>
    </div>
    </div>
    </div>
   
  );
}
