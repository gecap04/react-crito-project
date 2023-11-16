import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_leftline from '../../assets/images/left-line.svg'

const ConnectSection = () => {
  return (
    <section className="lets-connect">
        <img src={img_leftline} alt="left line" />
        <div className="container">

            <div className="nav-btn">
                <Link to="/">Home</Link>
                <Link to="/contacts">Contact</Link>
            </div>
            <h1>Let's Connect</h1>

        </div>
    </section>
  )
}

export default ConnectSection