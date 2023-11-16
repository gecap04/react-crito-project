import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'
import img_team1 from '../../assets/images/team-Image1.png'
import img_team2 from '../../assets/images/team-Image2.png'
import img_team3 from '../../assets/images/team-Image3.png'
import img_team4 from '../../assets/images/team-Image4.png'

const TeamSection = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Meet Our Team" description="Experience Team Members" />    
                <div className="button-right"> <Button type="" text="Browse Team" url="/learn-more" /> </div>
            </div>

           

            <div className="our-team">
                <article>
                    <img src={img_team1} alt="Chef Operation Officer" />
                    <h3>Kristine Palmer</h3>
                    <p>Chef Operation Officer</p>
                </article>

                <article>
                    <img src={img_team2} alt="Senior Consultant" />
                    <h3>Mark Aubri</h3>
                    <p>Senior Consultant</p>
                </article>

                <article>
                    <img src={img_team3} alt="Senior Consultant" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </article>

                <article>
                    <img src={img_team4} alt="Senior Tech Consultant" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </article>
                    
            </div>

            <div className="dot-menu">
                <a className="dots" href="#">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default TeamSection