import React from 'react';
import { Feature, Subfeature } from '../../components';
import './resume.css';
const Resume = () => {
  return (
    <div className='gpt3__resume section__margin' id='resume'>
      <div className='gpt3__resume-heading'>
        <h1 className='gradient__text'>Tyler Berg</h1>
        <a href='mailto: tb2867@columbia.edu'><p>Email: tb2867@columbia.edu</p></a>
        <a href='https://www.linkedin.com/in/tyberg/'><p>LinkedIn: https://www.linkedin.com/in/tyberg/</p></a>
      </div>
      <div className='gpt3__resume-container'>
        <div className='berg__resume-feature'><Feature title='Education'  text=''/></div>
        <Subfeature title='Columbia University September 2019- May 2023' text=''/>
        <Subfeature title='B.A. in Computer Science' text='' />
        <Subfeature title='Relevant Coursework' text='Introduction to Computer Science/Programming in Java, Data Structures in Java, Discrete Mathematics, Advanced Programming, Computer Science Theory, Computational Linear Algebra, Fundamentals of Computer Systems, Artificial Intelligence, Calculus I-III, Statistics'/>
        <Subfeature title='Skills' text='C, Java, Python, HTML, CSS, Javascript, Node.js, React, Data Structures, Artificial Intelligence, Leadership, Problem Solving, Communication'/>
        <Subfeature title='Academic Honors' text="Academic All-American, Academic All-Ivy, Dean's List"/>
        
        <div className='berg__resume-feature'><a href='#project'><Feature title='Recent Projects' text=''/></a></div>
        <Subfeature title='Neural Network' text='Project in Python: Training of a simple neural network for classification of a training data set. Utilizing a three-unit input layer, two-unit hidden layer, and one-unit output layer. Implementation of backpropagation used to train the network (initial learning rate = 0 and standard sigmoid activation function). Experimentation with other learning rates and activation functions (tanh, softplus, and ReLU)'/>
        <Subfeature title='Temporal Difference Learning Black Jack' text='Project in Python: Implementation of Q learning algorithm. Program learns the optimal policy and values for a game of blackjack purely through self-play. Makes use of 𝜀-greedy action to allow for exploration'/>
        
        <div className='berg__resume-feature'><Feature title='Leadership' text=''/></div>
        <Subfeature title='Captain of Division 1 Cross Country/Track and Field Team (2019-Present)' text=''/>
        <Subfeature title="Columbia Lion's Leadership Initiative" text='Meet with fellow student-athlete leaders to discuss the best ways of leading a team through numerous situations.'/>
        <Subfeature title='Student Athlete Advisory Council (SAAC) (2020-Present)' text='Participate in group discussions regarding issues that need to be addressed to improve the student-athlete experience. Members of SAAC vote on NCAA legislation, organize community events, raise money for philanthropic organizations increasing involvement in the broader NYC community, and work with Columbia Athletics to further enhance athletic and academic performance.'/>
      </div>
    </div>
  )
}

export default Resume
