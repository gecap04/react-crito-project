import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'
import img_woman from '../../assets/images/woman-image.png'


const CompanySection = () => {
  return (
    <section className="company-section">
    <div className="container">
        <div className="left-side">
            <img src={img_woman} alt="image of woman walking" />
            <div className="blue-rectangle">
                <h3>Samantha Brown,
                    <p>Founder</p>
                </h3> 
                <p className="founder-info">"Lorem ipsum, dolor sit amet consectetur adipisicing elit."</p>
            </div>

        </div>

        <div className="right-side">
            <div className="title">
            <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
            </div>
            <p className="company-info1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
            </p>
            <p className=" company-info2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
            </p>
            <div className="buttons">
                <Button type="black" text="Learn More" url="/learn-more" />
                <Button type="round" text="" url="/learn-more" />
                <p>Intro Video</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default CompanySection