import React from 'react';
import './about.css';
import ME from '../../assets/image_animation.png';


const About = () => {
  return (
    <section id='about'>
      <h2>Litt om meg selv </h2> 

      <div className="container about__container">
        <div className='about__me'>

          <div className="about__me-image">
            <img src={ME} alt="About" height={300} />
        </div>
        </div>

        <article className='about__content'>
        <p>Jeg er en livsglad og positiv kvinne på 40 år som 
        har lett for å komme i kontakt med andre mennesker, 
        og er en svært ryddig person som liker orden rundt meg. 

        Som person kan jeg ha flere baller i luften samtidig, 
        liker å stå på og er ikke redd for å ta i et tak.
        <br/><br/>
        Jeg har, siden april 2022, 
        deltatt på et IT-Utvikler kurs hos JobLoop for å videreutvikle meg innen IT og Design. 
        Jeg hadde ansvar for et prosjekt, der vi skulle lage en hjemmeside for Phillips Karriere. 
        Min oppgave var å planlegge, 
        gjennomføre og delegere oppgavene til de andre på teamet. 
        <br/><br/>
        Jeg har tidligere gått på Akademiet Fagutdanning, 
        der jeg tilegnet meg kunnskaper innen Digital Mediedesign, 
        og har i tillegg lært meg ulike programmer på egenhånd. 
        <br/><br/>
        Jeg er ekstremt turglad, men trives også å jobbe med design på fritiden.
        </p>

        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>

        </article>
    </div>
  
</section>
  )
}

export default About;