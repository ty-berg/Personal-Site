import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import linkedin from '../../assets/linkedinlogo.png'
import github from '../../assets/githublogo.png'
import './navbar.css';

const Menu = () =>(
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#resume'>Resume</a></p>
  <p><a href='#project'>Recent Projects</a></p>
  <p><a href='#footer'>Social Media</a></p>
  <p><a href='https://www.linkedin.com/in/tyberg/'><img src={linkedin} alt='linkedin'/></a></p>
  <p><a href='https://github.com/ty-berg'><img src={github} alt='github'/></a></p>
  </>
)


const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className = 'gpt3__navbar-links'>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
