import React from 'react'

const ContentBox = ({title, description, url, }) => {
  return (
    <div className="content-box">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn-round" href={url}><i className="fa-light fa-arrow-right"  ></i></a>

    </div>
  )
}

export default ContentBox