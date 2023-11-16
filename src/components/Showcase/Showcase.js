import Button from  '../../assets/Style/Generics/Button'
import React from 'react'
import img_man from '../../assets/images/showcase-image.svg'
import img_leftLine from '../../assets/images/left-line.svg'

const Showcase = () => {
  return (
    <section className="showcase">
            <img className="background-lines" src={img_leftLine} alt="" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    
                    <Button type="yellow" text="Get consulting" url="/services/get-consulting"/>
                    <Button type="" text="Learn More" url="/learn-more" />
                    
                   
                </div>
                <img src={img_man} alt="showcase image of man" />
            </div>
    </section>
  )
}

export default Showcase