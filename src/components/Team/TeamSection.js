import React from 'react'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import Button from '../../assets/Style/Generics/Button'
import TeamBox from '../TeamBox'
import img_team1 from '../../assets/images/team-Image1.png'
import img_team2 from '../../assets/images/team-Image2.png'
import img_team3 from '../../assets/images/team-Image3.png'
import img_team4 from '../../assets/images/team-Image4.png'

const TeamSection = () => {


    const teams =[
        {img: img_team1, title: "Kristine Palmer",  description: "Chef Operation Officer" },
        {img: img_team2, title: "Mark Aubri",  description: "Senior Consultant" },
        {img: img_team3, title: "Kimberly Hansen",  description: "Senior Consultant" },
        {img: img_team4, title: "Justin Willoman", description: "Senior Tech Consultant" }
    ]


  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Meet Our Team" description="Experience Team Members" />    
                <div className="button-right"> <Button type="" text="Browse Team" url="/learn-more" /> </div>
            </div>

           

            <div className="our-team">


                {
                    teams.map((team, index) => (
                        <TeamBox key={index} img={team.img} title={team.title} description={team.description} />
                    ))
                }
                    
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