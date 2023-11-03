import './NavSection.css';
import React from 'react'
import img_logotype from '../../assets/images/Logotype.svg'
import Button from '../Generics/Button'

const NavSection = () => {
  return (
    <section className="nav-section">
        <div className="container">
            <a href="index.html"><img className="logotype" src={img_logotype} alt="crito logotype" /></a>
            <button className="menu-bars"> <i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i calssName="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>

                        <div calssName="content-box">
                            <i calssName="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>

                        <div calssName="content-box last">
                            <i calssName="fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>

                    <div calssName="social-media">
                        <a href="https://facebook.com/" target="_blank"> <i calssName="fa-brands fa-facebook"></i></a> 
                        <a href="https://twitter.com/" target="_blank"> <i calssName="fa-brands fa-x-twitter"></i></a> 
                        <a href="https://instagram.com/" target="_blank"> <i calssName="fa-brands fa-instagram"></i></a> 
                        <a href="https://linkedin.com/" target="_blank"> <i calssName="fa-brands fa-linkedin"></i></a> 
                    </div>
                </div>

                <div calssName="main-menu">
                    <nav>
                        <a calssName="active" href="index.html">Home</a>
                        <a href="service.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                        <Button text="Login" url="/login" />
                </div>
            </div>

        </div>
</section>

  )
}

export default NavSection