import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
        <p className="section-title"> {title} </p>
        <h2> {description} </h2>
    </>
  )
}

export default SectionTitle