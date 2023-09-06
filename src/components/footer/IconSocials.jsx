import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';


const HeaderSocials = () => {
  return (

    <div className="icon__socials">
    
      <ul class="social-list">
        <li id="icons">
        <a href="https://facebook.com">
          <FaFacebookF className='icon'/></a>
      </li>
          
        <li id="icons">
        <a href="https://instagram.com">
          <AiOutlineInstagram className='icon'/></a>
      </li>
    
      <li id="icons">
        <a href="https://linkdin.com">
          <FaLinkedinIn className='icon'/></a>
      </li>

      <li id="icons">
      <a href="https://github.com/monmath">
      <AiFillGithub className='icon'/></a>
      </li>
      </ul>
   </div>
 
  )
}

export default HeaderSocials;