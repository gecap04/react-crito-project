import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_star from '../../assets/images/Star.svg'
import img_client1 from '../../assets/images/client-Image1.png'
import img_client2 from '../../assets/images/client-Image2.png'
import img_client3 from '../../assets/images/client-Image3.png'
import TestimonialBox from '../TestimonialBox'

const TestimonialSection = () => {


    const testimonials =[
        {imgStar: img_star, comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",  imgClient: img_client1, nameTitle: "Cassandra Warren", jobTitle: "Business Manager, Dorfus"},
        {imgStar: img_star, comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",  imgClient: img_client2, nameTitle: "Amanda Tulling", jobTitle: "Senior Developer, Square"},
        {imgStar: img_star, comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",  imgClient: img_client3, nameTitle: "Jack McDogglas", jobTitle: "Key Account Manager, Gobona"},
    ]

  return (
    <section className="testimonial-section">
    <div className="container">

        <div className="box"></div>
            <div className="section-title">
            <SectionTitle title="Testimonial" description="What Our Clienr Says"/>
            </div>

            <div className="ratings">
            {
                    testimonials.map((testimonial, index) => (
                        <TestimonialBox key={index} imgStar={testimonial.imgStar} comment={testimonial.comment} imgClient={testimonial.imgClient} nameTitle={testimonial.nameTitle} jobTitle={testimonial.jobTitle} />
                    ))
                }

            </div>

            <div className="center-content">
            <Button type="black" text="All Reviews" url="/reviews" />
            </div>
        
    </div>
</section>
  )
}

export default TestimonialSection