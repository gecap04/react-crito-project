import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_star from '../../assets/images/Star.svg'
import img_client1 from '../../assets/images/client-Image1.png'
import img_client2 from '../../assets/images/client-Image2.png'
import img_client3 from '../../assets/images/client-Image3.png'

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
    <div className="container">

        <div className="box"></div>
            <div className="section-title">
            <SectionTitle title="Testimonial" description="What Our Clienr Says"/>
            </div>

            <div className="ratings">
                <article>
                    <img className="stars" src={img_star} alt="five star rating"/>
                    <p className="comments">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="title-alignment">
                        <img src={img_client1} alt=""/>
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p className="job-title">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </article>

                <article>
                    <img className="stars" src={img_star} alt="five star rating"/>
                    <p className="comments">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="title-alignment">
                        <img src={img_client2} alt=""/>
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p className="job-title">Senior Developer, Square</p>
                        </div>
                    </div>
                    
                </article>

                <article>
                    <img className="stars" src={img_star} alt="five star rating"/>
                    <p className="comments">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    
                    <div className="title-alignment">
                        <img src={img_client3} alt=""/>
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p className="job-title">Key Account Manager, Gobona</p>
                        </div>
                       
                    </div>
                </article>

            </div>

            <div className="center-content">
            <Button type="black" text="All Reviews" url="/reviews" />
            </div>
        
    </div>
</section>
  )
}

export default TestimonialSection