import React from 'react'
import NewsPage from '../components/NewsPage/NewsHeader'
import NewsContent from '../components/NewsContent/NewsContentSection'
import Subscribe from '../components/Subscribe/SubscribeSection'

const News = () => {
  return (
    <>
    <NewsPage />
    <NewsContent />
    
    <Subscribe />
    </>
    
  )
}

export default News