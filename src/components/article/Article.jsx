import React from 'react';
import './article.css';
const Article = ({ imgUrl, id, title }) => {
  return (
    <div className='gpt3__blog-container_article grow'>
      <div className='gpt3__blog-container_article-image'>
        <a href={id}><img src={imgUrl} alt='blog' /></a>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <h3><a href={id}>{title}</a></h3>
        </div>
      </div>
    </div>
  )
}

export default Article
