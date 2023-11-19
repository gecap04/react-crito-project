import React from 'react'

const ProjectBox = ({img, title, url}) => {
  return (
    <article>
        <img src={img} />
        <h3>{title}</h3>
        <a href={url}>Read More<i className="fa-regular fa-arrow-up-right"></i></a>
    </article>
  )
}

export default ProjectBox