import React from 'react'

const TestimonialBox = ({imgStar, comment, imgClient, nameTitle, jobTitle }) => {
  return (
    <article>
        <img className="stars" src={imgStar}/>
            <p className="comments">{comment}</p>
            <div className="title-alignment">
                <img src={imgClient} />
                <div>
                    <h3>{nameTitle}</h3>
                    <p className="job-title">{jobTitle}</p>
                </div>
            </div>
    </article>
  )
}

export default TestimonialBox