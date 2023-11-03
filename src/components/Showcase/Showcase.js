import Button from '../Generics/Button'
import './Showcase.css';
import React from 'react'

const Showcase = () => {
  return (
    <section className="showcase">
            <img className="background-lines" src="images/left-line.svg" alt="" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    
                    <Button text="Get consulting" url="/services/get-consulting"/>
                    <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i> </a>
                    
                   
                </div>
                <img src="images/showcase-image.svg" alt="showcase image of man" />
            </div>
    </section>
  )
}

export default Showcase