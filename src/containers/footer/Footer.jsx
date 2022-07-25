import React from 'react';
import './footer.css'; 
import insta from '../../assets/instalink.jpg'
import twitter from '../../assets/twitterlink.jpg'
import strava from '../../assets/stravahike2.jpg'
import instalogo from '../../assets/instalogo.png'
import twitterlogo from '../../assets/twitterlogo.png'
import stravalogo from '../../assets/stravalogo.png'
import { Socials } from '../../components';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Get To Know Me...</h1>
      </div>
      <div className='berg__footer-socials'>
        <Socials imgUrl={insta} id='https://www.instagram.com/tberg19/' logo={instalogo}/>
        <Socials imgUrl={twitter} id='https://twitter.com/tberg05' logo={twitterlogo}/>
        <Socials imgUrl={strava} id='https://www.strava.com/athletes/45361300' logo={stravalogo}/>
      </div>
    </div>
  )
}

export default Footer
