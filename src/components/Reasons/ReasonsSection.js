import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_woman2 from '../../assets/images/woman-image2.png'

const ReasonsSection = () => {
  return (
    <section className="reasons-section">
        <div className="container">
            <div className="left-side">
                <div className="title">
                    <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
                </div>
               
                <div className="reasons">
                    <i className="fa-light fa-thumbs-up"></i>
                    <div>
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="reasons">
                    <i className="fa-light fa-hexagon-check"></i>
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>


                <div className="reasons">
                    <i className="fa-light fa-pen-nib"></i>
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>


                <div className="reasons">
                    <i className="fa-light fa-head-side-gear"></i>
                    <div>
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>


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