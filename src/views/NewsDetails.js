import React from 'react'
import NewsPage from '../components/NewsPage/NewsHeader'
import Details from '../components/Details/DetailsSection'
import Article from '../components/Article/ArticleSection'


const NewsDetails = () => {
  return (
    <>
      <NewsPage />
      <Details/>
      <Article />
    </>
  )
}

export default NewsDetails