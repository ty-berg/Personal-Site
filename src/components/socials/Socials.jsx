import React from 'react';
import './socials.css';
const Socials = ({ imgUrl, id, logo }) => {
  return (
    <div className='gpt3__blog-container_socials grow'>
      <div className='gpt3__blog-container_socials-image'>
        <a href={id} ><img src={imgUrl} alt='social' /></a>
      </div>
      <div className='gpt3__blog-container_socials-content'>
        <div>
          <a href={id}><img src={logo} alt='logo'/></a>
        </div>
      </div>
    </div>
  )
}

export default Socials
