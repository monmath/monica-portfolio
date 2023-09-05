import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import{CiUser} from 'react-icons/ci';
import{BsBookmarkStar} from 'react-icons/bs';
import{IoMdImages} from 'react-icons/io';
import{AiOutlineMessage} from 'react-icons/ai';
import{MdConnectWithoutContact} from 'react-icons/md';

import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="a" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsBookmarkStar/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><IoMdImages/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
      <a href="#social" onClick={() => setActiveNav('#social')} className={activeNav === '#social' ? 'active' : ''}><MdConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav;