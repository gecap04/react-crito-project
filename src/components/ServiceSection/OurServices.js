import React from 'react'
import ContentBox from '../ContentBox'
// import './ServiceSection.css'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'


const OurServices = () => {

    const services =[
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/businessadvice"},
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/startupbusiness"},
        {title: "Finacial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financialadvice"},
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/riskmanagement"}

    ]





  return (
    <section className="services-section">
        <img className="background-lines-right" src="images/line-right.svg" alt="" />
        <div className="container">
            <div className="titles">
                <SectionTitle title="Our Services" description="We provide The Best Service For Consulting"/>
            </div>

            <div className="content">
                
                {
                    services.map((service, index) => (
                    <ContentBox key={index} title={service.title} description={service.description} url={service.url} />
                    ))
                }

            </div>

            <div className="center-content">
                <Button type="" text="Browse Services" url="/services" />
            </div>

        </div>
    </section>
  )
}

export default OurServices