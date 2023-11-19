import React from 'react'
import { useArticles } from '../Context/ArticleContext'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    const { articles } = useArticles()
  return (
    <div className="articles">
        {
            articles.map( article => (
                <div key={article.id}>
                    <Link to={`/articles/${article.id}`} >
                        {article.title}
                    </Link>
                    <p>{article.author}</p>
                </div>
                
            ))
        }
    </div>
  )
}

export default ArticleList