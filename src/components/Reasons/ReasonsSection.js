import React from 'react'
import ReasonsBox from '../ReasonsBox'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_woman2 from '../../assets/images/woman-image2.png'

const ReasonsSection = () => {


    const reasons =[
        {icon: "fa-light fa-thumbs-up", title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-hexagon-check", title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-pen-nib", title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur."},
        {icon: "fa-light fa-head-side-gear", title: "Artificial Inteligence", description: "Lorem, ipsum dolor sit amet consectetur."},
    ]



  return (
    <section className="reasons-section">
        <div className="container">
            <div className="left-side">
                <div className="title">
                    <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
                </div>

                {
                    reasons.map((reason, index) => (
                        <ReasonsBox key={index} icon={reason.icon} title={reason.title} description={reason.description} />
                    ))
                    
                }


            </div>

            <div className="right-side">
                <img src={img_woman2} alt="" />
                <div className="grey-box"></div>

            </div>

        </div>
    </section>
  )
}

export default ReasonsSection