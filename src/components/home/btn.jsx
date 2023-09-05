import React from 'react';
import CV from '../../assets/CV_Monica.pdf';

const BTN = () => {
  return (
    <div className='buttons'>
    <a href={CV} download className='btn'>CV</a>
    <a href="#contact" className='btn btn-primary'>Kontakt</a>
</div>
  )
}

export default BTN;