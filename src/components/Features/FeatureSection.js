import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'

const FeatureSection = () => {
  return (

    <section className="feature-section">
    <div className="container">
        <div className="section-title">
            <SectionTitle title="Features" description="Our Accounting is  trusted by thousand of companies" />
            <Button type="yellow" text="Learn More" url="/learn-more" />
        </div>

       

        <div className="features">
            <article className=" part1">
                <i className="fa-regular fa-handshake"></i>
              <h3>Business Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </article>

            <article className="part2">
                <i className="fa-regular fa-lightbulb-on"></i>
              <h3>Startup Business</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </article>

            <article className="part3">
                <i className="fa-regular fa-chart-mixed"></i>
              <h3>Finacial Advice</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </article>

            <article className="part4">
                <i className="fa-regular fa-cube"></i>
              <h3>Risk Managment</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </article>

            

        </div>

    </div>
</section>

  )
}

export default FeatureSection