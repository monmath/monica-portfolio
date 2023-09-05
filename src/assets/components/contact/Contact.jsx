import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l3uszof', 'template_e4vt3hq', form.current, 'wWuzjVCYypRkkM1-P')
    e.target.reset()
  }; 

  return (
    <section id='contact'>
<h2>Ta kontakt</h2>

<div className="container contact__container">
  <div className="contact__options">

<article className="contact__option">
  <AiOutlineMail className='contact__option-icon'/>
  <h4>Epost</h4>
  <h5>monimi2120@gmail.com</h5>
  <a href="mailto:mon_math@hotmail.com" target="_blank" rel="noopener noreferrer">Send en epost</a>
</article>

<article className="contact__option">
  <RiMessengerLine className='contact__option-icon'/>
  <h4>Messenger</h4>
  {/*<h5></h5>  */}
  <a href="https://m.me/monica.mathiassen1" target="_blank" rel="noopener noreferrer">Send melding</a>
</article>

<article className="contact__option">
  <AiOutlineWhatsApp className='contact__option-icon'/>
  <h4>Telefonnummer</h4>
  <h5>+4740729690</h5>
 </article>

  </div>
  {/*END OF CONTACT OPTIONS"*/}
  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Ditt navn' required />
    <input type="email" name='email' placeholder='Epost' required />
    <textarea name="message" rows="7" placeholder='Din melding' required></textarea>
    <button type='submit' className='btn btn-primary'>Send</button>
  </form>
</div>


    </section>

     
  )
}

export default Contact;