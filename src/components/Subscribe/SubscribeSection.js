import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import img_lineright2 from '../../assets/images/line-right2.svg'

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
            <img src={img_lineright2} alt="squiggly line" />
            <div className="container">
                <div className="get-news">
                    <h2>Get News Updates By Signup</h2>
               

                    <form action="#" method="post">
                        <input type="email_input" name="email_input" id="email_input" placeholder="username@domain.com" />
                       <a> <Button type="yellow" text="Subscribe" url="/subscribe" /> </a>
                    </form>
                </div>
                
            </div>

    </section>
  )
}

export default SubscribeSection