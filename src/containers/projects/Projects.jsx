import React from 'react';
import './projects.css';
import { Article } from '../../components';
import { neuralnet, blackjack} from './import';
const Projects = () => {
  return (
    <div className='gpt3__blog section__padding' id='project'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Recent Projects</h1>
      </div>
      <div className='gpt3__blog-container'>
        <Article imgUrl={neuralnet} id = 'https://github.com/ty-berg' title='Simple Neural Network'/>
        <Article imgUrl={blackjack} id = 'https://github.com/ty-berg' title='Temporal Difference Learning Blackjack'/>
      </div>
    </div>
  )
}

export default Projects
