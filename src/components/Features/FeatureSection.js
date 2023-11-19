import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'
import FeatureColumn from '../FeatureColumn'

const FeatureSection = () => {


const features = [
  {position: "part1", icon: "fa-regular fa-handshake", title: "Business Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  {position: "part2", icon: "fa-regular fa-lightbulb-on", title: "Startup Business", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  {position: "part3", icon: "fa-regular fa-chart-mixed", title: "Finacial Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
  {position: "part4", icon: "fa-regular fa-cube", title: "Risk Managment", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
]




  return (

    <section className="feature-section">
    <div className="container">
        <div className="section-title">
            <SectionTitle title="Features" description="Our Accounting is  trusted by thousand of companies" />
            <Button type="yellow" text="Learn More" url="/learn-more" />
        </div>

       

        <div className="features">
            {
              features.map((feature, index) => (
                <FeatureColumn key={index} position={feature.position} icon={feature.icon} title={feature.title} description={feature.description} />
              ))
            }
        </div>

    </div>
</section>

  )
}

export default FeatureSection