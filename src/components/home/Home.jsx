import React from 'react';
import './home.css';
import BTN from './btn';
import ME from '../../assets/image_home_intro.jpg';


const Home = () => {
  return (

   <header>

    <div className="container header__container">
        <h2>Hei! Jeg er</h2>
        <h1>Monica <br/>Mathiassen</h1>
        <h5 className='subtitle__intro'>Designer & Developer</h5>

    <div className="image__me">
        <img src={ME} alt="me" />
    </div>

    <BTN/>
        
    <div className="circles">
        <div id="home-outer-circle"></div>
        <div id="home-inner-circle"></div>
        <div id="home-outer-circle02"></div>
        <div id="home-inner-circle02"></div>
        <div id="home-outer-circle03"></div>
        <div id="home-inner-circle03"></div>
    </div> 

    </div>
   </header>
  )
}

export default Home;

