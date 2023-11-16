import React from 'react'
import OurServices from '../components/ServiceSection/OurServices'
import Showcase from '../components/Showcase/Showcase'
import Brands from '../components/Brands/BrandSecction'
import Features from '../components/Features/FeatureSection'
import Company from '../components/Company/CompanySection'
import Reasons from '../components/Reasons/ReasonsSection'
import Project from '../components/Project/ProjectSection'
import Team from '../components/Team/TeamSection'
import Testimonial from '../components/Testimonial/TestimonialSection'
import Article from '../components/Article/ArticleSection'
import Subscribe from '../components/Subscribe/SubscribeSection'
const Home = () => {
  return (
    <>
        <Showcase />
        <Brands />
        <Features />
        <Company />
        <OurServices />
        <Reasons />
        <Project />
        <Team />
        <Testimonial />
        <Article />
        <Subscribe />

    </>
  )
}

export default Home