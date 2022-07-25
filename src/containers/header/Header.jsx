import React from 'react';
import './header.css';
import headshot from '../../assets/headshot.jpg';
import clogo from '../../assets/clogo.png';
import csslogo from '../../assets/csslogo.png';
import htmllogo from '../../assets/htmllogo.png';
import javalogo from '../../assets/javalogo.svg';
import jslogo from '../../assets/jslogo.png';
import nodelogo from '../../assets/nodelogo.svg';
import pythonlogo from '../../assets/pythonlogo.png';
import reactlogo from  '../../assets/reactlogo.png';
const Header = () => {
  return (
    <section id='home'>
      <div className='star star1'></div>
      <div className='star star2'></div>
      <div className='star star3'></div>
      <div className='star star4'></div>
      <div className='star star5'></div>
      <div className='star star6'></div>
      <div className='star star7'></div>
      <div className='star star8'></div>
      <div className='gpt3__header section__padding'>
        <div className='gpt3__header-left'>
          <p>I am currently enrolled at Columbia University pursuing a B.A. in Computer Science. I'm a member of the Columbia Lions Leadership Initiative, Columbia Student Athlete Advisory Council, and a full-time student-athlete as a captain of the Track and Field, and Cross Country teams.</p>
        </div>
        <div className='gpt3__header-content'>
          <div className='type-container'>
            <p>Hi my name is...</p>
            <div className='typed-out'>
              <h1 className='gradient__text'>Tyler Berg</h1>
            </div>
            <div className='berg__header-image'>
              <img src={headshot} alt='headshot' />
            </div>
          </div>
        </div>
        <div className='berg__header-right'>
            <p>Experience With:</p>
            <div className='berg__header-languages'>
              <img className='grow1' src={clogo} alt='clogo' />
              <img className='grow1' src={csslogo} alt='csslogo' />
              <img className='grow1' src={htmllogo} alt ='htmllogo' />
              <img className='grow1' src={javalogo} alt='javalogo' />
              <img className='grow1' src={jslogo} alt='jslogo' />
              <img className='grow1' src={nodelogo} alt='nodelogo' />
              <img className='grow1' src={pythonlogo} alt='pythonlogo' />
              <img className='grow1' src={reactlogo} alt='reactlogo' />
             </div>
        </div>
      </div>
    </section>
  )
}

export default Header
