import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_article1 from '../../assets/images/article-Image1.png'
import img_article2 from '../../assets/images/article-Image2.png'
import img_article3 from '../../assets/images/article-Image3.png'
import img_article4 from '../../assets/images/article-Image4.png'

const ProjectSection = () => {
  return (
    <section className="project-and-case-section">
        <div className="container">
            <div className="section-title">
            <SectionTitle title="Project & Case Studies" description="Let's Looks Our Global Projects" />
            </div>
            <div className="project-and-cases">
                <article>
                    <img src={img_article1} alt="Man reading a paper"/>
                    <h3>Grow your business</h3>
                    <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                </article>

                <article>
                    <img src={img_article2} alt="electronics" />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                </article>

                <article>
                    <img src={img_article3} alt="a notepad" />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
                </article>

                <article>
                    <img src={img_article4} alt="a laptop" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
                </article>
            </div>

            <div className="center-content">
            <Button type="black" text="All Recent Projects" url="/projects" />
            </div>

        </div>
    </section>
  )
}

export default ProjectSection