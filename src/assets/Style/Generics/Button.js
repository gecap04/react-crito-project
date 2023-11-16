import React from 'react'
import '../../Style/style.css'

const Button = ({ type, text, url }) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
          return 'btn-yellow'
      case 'black':
          return 'btn-black'
      case 'round':
          return 'btn-round'
      default:
          return 'btn-transparent'
    }

  }





  return (
    <button className={getButtonClassName()} href={url}>
        {text}
        <i className="fa-regular fa-arrow-up-right"></i>
    </button>
  )
}

export default Button


