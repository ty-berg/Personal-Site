import React from 'react';

import { Footer, Projects, Resume, Header} from './containers';
import { Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
        <div className='normal_bg'>
          <Resume />
          <Projects />
          <Footer />
        </div>
      </div>
  </div>
  )
}

export default App
