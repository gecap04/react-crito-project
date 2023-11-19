import React from 'react'

const TeamBox = ({img, title, description}) => {
  return (
    <article>
        <img src={img} />
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
  )
}

export default TeamBox