import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_leftline from '../../assets/images/left-line.svg'


const NewsHeader = () => {
  return (
    <section className="news-header">
        <img src={img_leftline} alt="left line" />
        <div className="container">

            <div className="nav-btn">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
            </div>
            <h1>News & Articles</h1>

        </div>
    </section>
  )
}

export default NewsHeader