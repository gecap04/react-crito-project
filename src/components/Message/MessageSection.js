import React, { useState } from 'react'

const MessageSection = () => {
  
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value, 2))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 3))
                (emailRegex, "invalid email")
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 3))
                break
        }
    }

    const validateLength = (value, minLength = 1) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        for(let element of e.target) {
            switch (element.name) {
                case 'name':
                    setName(element.value)
                    setNameError(validateLength(element.value, 2))
                    break
                case 'email':
                    setEmail(element.value)
                    setEmailError(validateLength(element.value, 3))
                    break
                case 'message':
                    setMessage(element.value)
                    setMessageError(validateLength(element.value, 3))
                    break
            }
        }

        if (!nameError && !emailError && !messageError) {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            if (result.status === 200)
                alert('Message sent successfully')
            else
                setErrorMessage('Something went wrong.')

        }
        
    }


  return (
    <section className="message"> 
    <div className="container">
        <div className="message-box"></div>
        <div className="title">
            <h2>Leave us a message</h2>
            <h2>for any information.</h2>
        </div>

        <div className="message-info">
            <form onSubmit={handleSubmit} noValidate>
                <p className="error-message">{errorMessage}</p>

                <label className={`${nameError ? 'error' : ''}`}>{`${nameError ? 'Your name needs to be submited' : ''}`}</label>
                <input method="post" type="text" name="name" placeholder="Name" value={name} onChange={(e) => handleChange(e)} />
                
                <label className={`${emailError ? 'error' : ''}`}>{`${emailError ? 'Your email needs to be submited' : ''}`}</label>
                <input method="post" type="email" name="email" placeholder="Email" value={email} onChange={(e) => handleChange(e)}  />
                
                <label className={`${messageError ? 'error' : ''}`}>{`${messageError ? 'Your message needs to be submited' : ''}`}</label>
                <textarea method="post" name="message" placeholder="Your message" value={message} onChange={(e) => handleChange(e)} ></textarea>
                

                <div className="center-content" id="form-btn">
                    <button className="btn-yellow" type="submit" >Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>


            </form>
        </div>
        
    </div>
    </section>
  )
}

export default MessageSection