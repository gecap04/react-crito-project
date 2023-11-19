import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import ProjectBox from '../ProjectBox'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_article1 from '../../assets/images/article-Image1.png'
import img_article2 from '../../assets/images/article-Image2.png'
import img_article3 from '../../assets/images/article-Image3.png'
import img_article4 from '../../assets/images/article-Image4.png'

const ProjectSection = () => {


    const projects =[
        {img: img_article1, title: "Grow your business",  url: "/projects/growyourbusiness" },
        {img: img_article2, title: "Why your client needs a responsive website",  url: "/projects/Whyyourclientneedsaresponsivewebsite" },
        {img: img_article3, title: "Educate your employees to get better results",  url: "/projects/Educateyouremployeestogetbetterresults" },
        {img: img_article4, title: "Business Insights is a important piece of your business", url: "/projects/BusinessInsightsisaimportantpieceofyourbusiness" }
    ]


  return (
    <section className="project-and-case-section">
        <div className="container">
            <div className="section-title">
            <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Projects" />
            </div>
            <div className="project-and-cases">

                {
                    projects.map((project, index) => (
                        <ProjectBox key={index} img={project.img} title={project.title} url={project.url} />
                    ))
                }
            </div>

            <div className="center-content">
            <Button type="black" text="All Recent Projects" url="/projects" />
            </div>

        </div>
    </section>
  )
}

export default ProjectSection