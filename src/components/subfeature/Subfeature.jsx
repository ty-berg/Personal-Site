import React from 'react';
import './subfeature.css';
const Subfeature = ({ title, text }) => {
  return (
    <div className='gpt3__subfeatures-container__feature'>
      <div className='gpt3__subfeatures-container__feature-title'>
        <div />
        <h3>{title}</h3>
      </div>
      <div className='gpt3__subfeatures-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Subfeature