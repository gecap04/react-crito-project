import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useArticles } from '../Context/ArticleContext'

const DetailsSection = () => {
    const {article, getArticle, clearArticle} = useArticles()
    const {id} = useParams()

    useEffect(() => {
        getArticle(id)

        return () => clearArticle()
    }, [])

  return (
     <div>
        {
            article ?
            (
                <h3>{article.title}</h3>
            )
            :
            (
                <div>Laddar</div>
            )
        }
     </div>
  )
}

export default DetailsSection