import React from 'react'
import {useArticles} from '../Context/ArticleContext'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import img_news1 from '../../assets/images/news-Image1.png'
import ArticleList from '../List/ArticleList'

const NewsContentSection = () => {

    const { articles } = useArticles()






  return (

    <section className="articleSection">
        <div className="container">
            <h3>Articles</h3>
            <ArticleList />
        </div>
    </section>
    
  )
}

export default NewsContentSection