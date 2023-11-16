import React from 'react'

const ContactSection = () => {
  return (
    <section class="contact-information">
        <div class="container">
            <div class="information-box">
                <div class="title">
                    <a class="btn-round" href="#"><i class="fa-sharp fa-solid fa-location-dot"></i></a>  
                    <h3>Visit us</h3>
                </div>

                <p>Sveavägen 31</p>
                <p>111 34 Stockholm</p>
            </div>

            <div class="information-box">
                <div class="title">
                    <a class="btn-round" href="#"><i class="fa-sharp fa-solid fa-phone"></i></a>
                    <h3>Call us</h3>
                </div>
                <p>+46 (8) 121 470 50</p>
                <p>+46 (8) 121 470 51</p>
            </div>

            <div class="information-box">
                <div class="title">
                    <a class="btn-round" href="#"><i class="fa-sharp fa-solid fa-envelope"></i></a>
                    <h3>Email us</h3>
                </div>
                <p>info@crito.com</p>
                <p>support@crito.com</p>
            </div>

        </div>
    </section>
  )
}

export default ContactSection