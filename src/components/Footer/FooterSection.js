import React from 'react'
import img_lineright3 from '../../assets/images/line-right3.svg'
import img_logo from '../../assets/images/Logo.svg'

const FooterSection = () => {
  return (
    <section className="footer-section">
    <div className="footer_line">
        <img src={img_lineright3} alt="squiggly line"/>
    </div>
    <div className="container">
        <div className="logo">
            <img className="logotype" src={img_logo} alt="crito logo bottom"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>

        <div className="footer-container">

            <div className="footer_links">
                <h3>Company</h3>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
            </div>

            <div className="footer_links">
                <h3>Help</h3>
                <a href="#">Customer Support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>

            <div className="footer_links">
                <h3>Resources</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to-Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>

            <div className="footer_links">
                <h3>Link</h3>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to-Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
        </div>

    </div>
</section>
  )
}

export default FooterSection