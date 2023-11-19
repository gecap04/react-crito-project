import React from 'react'

const ReasonsBox = ({ icon, title, description}) => {
  return (
    <div className="reasons">
      <i className={icon}></i>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ReasonsBox