import React from 'react'
import '../styles/Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="blur footer-blur-1"></div>
      
        <hr />
        <div className="footer">
            <div className="social-link">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />

            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />

            </div>
        </div>
    </div>

    </>
  )
}
