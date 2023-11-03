import React from 'react'

const Button = ({ text, url }) => {
  return (
    <button className="btn-yellow" href={url}>
        {text}
        <i className="fa-regular fa-arrow-up-right"></i>
    </button>

    

  )
}

export default Button


