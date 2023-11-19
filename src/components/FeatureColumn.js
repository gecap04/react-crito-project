import React from 'react'

const FeatureColumn = ({ position, icon, title, description}) => {
  return (
    <article className={position}>
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>


    </article>
  )
}

export default FeatureColumn