import React from 'react'
import Button from '../../assets/Style/Generics/Button'
import SectionTitle from '../../assets/Style/Generics/SectionTitle'
import img_news1 from '../../assets/images/news-Image1.png'
import img_news2 from '../../assets/images/news-Image2.png'
import img_news3 from '../../assets/images/news-Image3.png'





const ArticleSection = () => {
  return (

    <section className="article-and-news-section">
        <div className="container">
            <div className="section-title">
                 <SectionTitle title="Article & News" description="Get Every Single Articles & News"/>  
                 <div className="button-right" > <Button type="" text="Browse Articles" url="/reviews" /> </div>
            </div>

            

            <div className="article-container">
                <div className="article-pictures">
                    <img src={img_news1} alt="" />
                    <div className="date-box">
                        <h3>25</h3>
                        <p>Mar</p>
                    </div>
                </div>
            
                <div className="article-pictures">
                    <img src={img_news2} alt="" />
                    <div className="date-box">
                        <h3>17</h3>
                        <p>Mar</p>
                    </div>
                </div>

                <div className="article-pictures">
                    <img src={img_news3} alt="" />
                    <div className="date-box">
                        <h3>13</h3>
                        <p>Mar</p>
                    </div>
                </div>

                <div className="article-segment">
                    <p className="business-article">Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

                </div>

                <div className="article-segment">
                    <p className="business-article">Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

                </div>

                <div className="article-segment">
                    <p className="business-article">Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

                </div>

            </div>

            <div className="dot-menu">
                <a className="dots" href="#">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </a>
             </div>
           
        </div>
    </section>
  )
}

export default ArticleSection