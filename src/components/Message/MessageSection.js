import React from 'react'

const MessageSection = () => {
  return (
    <section className="message"> 
    <div className="container">
        <div className="message-box"></div>
        <div className="title">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
        </div>

        <div className="message-info">
            <form action="#" noValidate>
                <input method="post" type="text" name="name" placeholder="Name"/>
                <input method="post" type="email" name="email" placeholder="Email" />
                <textarea method="post" name="message" placeholder="Your essage"></textarea>
            </form>
        </div>
        <div className="center-content">
            <a class ="btn-yellow" href="#">Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
    </section>
  )
}

export default MessageSection