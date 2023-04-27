import React from 'react'
import './Style/Nav.css'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='NavOuterDiv'>
      <div className="logoDiv">
        <h1>LOGO</h1>
      </div>
      <div className="menuDiv">
        <ul>
          <li style={{color:"blue"}}>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="symbolDiv">
      <FaFacebookF className='icon'/>
      <FaTwitter className='icon'/>
      <FaInstagram className='icon'/>
      </div>
    </div>
  )
}

export default Nav