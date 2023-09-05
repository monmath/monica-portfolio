import React from 'react';
import './footer.css';
import IconSocials from '../footer/IconSocials';



import Logo from '../../assets/logo02.png';

const Footer = () => {
  return (
   <footer>
        <section id='social'>
        <IconSocials/>
        <img src={Logo} alt='me' className='footer__logo' />
       

{/** 
    <ul className='permalinks'>
    <li><a href='#'>Hjem</a></li>
    <li><a href='#about'>Om</a></li>
    <li><a href='#skills'>Ferdigheter</a></li>
    <li><a href='#services'>Prosjekter</a></li>
   </ul> */}
  
 
  </section>
   </footer>
  )
}

export default Footer;