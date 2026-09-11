import React from 'react';
import './styles.css';

import ME from './assets/image_home_intro.jpg';
import IMG01 from './assets/Pseudo_elements.png';
import IMG02 from './assets/Transitions.png';
import IMG03 from './assets/Calculator.png';
import IMG04 from './assets/Todo-list.png';
import IMG05 from './assets/drum_machine.jpg';
import IMG06 from './assets/prosjekt-phillips.png';

const projects = [
  { title: 'Prosjekt Phillips', type: 'Web • Teamprosjekt', image: IMG06, link: 'https://www.phillipskarriere.no/' },
  { title: 'Pseudo Elements', type: 'Frontend • CSS', image: IMG01, link: 'https://github.com/monmath?tab=repositories' },
  { title: 'Transitions', type: 'Frontend • CSS', image: IMG02, link: 'https://github.com/monmath?tab=repositories' },
  { title: 'Calculator', type: 'JavaScript • UI', image: IMG03, link: 'https://github.com/monmath?tab=repositories' },
  { title: 'Todo List', type: 'JavaScript • App', image: IMG04, link: 'https://github.com/monmath?tab=repositories' },
  { title: 'Drum Machine', type: 'JavaScript • Interaction', image: IMG05, link: 'https://github.com/monmath?tab=repositories' },
];

const skills = ['Digital markedsføring', 'Innhold & tekst', 'Webdesign', 'HTML & CSS', 'JavaScript', 'Figma', 'Visuell kommunikasjon', 'Universell utforming'];

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a className="brand" href="#top">MM<span>.</span></a>
        <div className="nav-links">
          <a href="#about">Om meg</a>
          <a href="#skills">Kompetanse</a>
          <a href="#experience">Erfaring</a>
          <a href="#projects">Prosjekter</a>
          <a href="#social">Kontakt</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">DESIGN • WEB • DIGITAL MARKEDSFØRING</p>
            <h1>Hei, jeg er<br /><span>Monica Mathiassen.</span></h1>
            <p className="hero-lead">Jeg kombinerer kreativitet, struktur og teknologi for å skape tydelig, brukervennlig og engasjerende digital kommunikasjon.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Se prosjekter <span>↗</span></a>
              <a className="button ghost" href="#social">Ta kontakt</a>
            </div>
            <div className="hero-meta"><span>43 år</span><i /> <span>Bergen</span><i /> <span>Digital markedsføring & design</span></div>
          </div>
          <div className="hero-visual">
            <div className="image-frame"><img src={ME} alt="Monica Mathiassen" /></div>
            <div className="floating-card"><strong>43</strong><span>år med<br />nysgjerrighet</span></div>
            <div className="orb orb-one" /><div className="orb orb-two" />
          </div>
        </section>

        <section id="about" className="section-shell section about-section">
          <div className="section-label">01 / OM MEG</div>
          <div className="about-grid">
            <h2>En kreativ problemløser med sans for detaljer.</h2>
            <div className="about-text">
              <p>Jeg er 43 år og har 12 års erfaring fra barnehage, i tillegg til utdanning og erfaring innen digital mediedesign, web og IT. De siste årene har jeg jobbet målrettet med å bygge videre på interessen min for digitale løsninger, design, innhold og kommunikasjon.</p>
              <p>Jeg har blant annet gjennomført IT-utviklerutdanning hos JobLoop, studert digital mediedesign ved Akademiet og hatt praksis innen digital markedsføring hos Fjord Norge.</p>
              <p>Jeg trives best når jeg får kombinere kreativitet og struktur – og når jeg kan gjøre innhold enkelt, visuelt og engasjerende.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell section experience-section">
          <div className="section-label">02 / ERFARING</div>
          <div className="experience-grid">
            <div className="experience-intro">
              <h2>Fra mennesker og kommunikasjon til digitale løsninger.</h2>
              <p>Jeg tar med meg mange års erfaring med mennesker, samarbeid og kommunikasjon inn i det digitale arbeidet.</p>
            </div>
            <div className="timeline">
              <article><span>2026 — nå</span><div><h3>A2G • Markedsavdelingen</h3><p>Praksis med digitalt innhold, tekst, nettsideinnhold og visuell kommunikasjon. Jeg jobber blant annet med å utvikle innhold som gjør informasjon tydelig og relevant for målgruppen.</p></div></article>
              <article><span>2024</span><div><h3>Fjord Norge • Digital markedsføring</h3><p>6 måneders praksis med digital markedsføring, innhold og kommunikasjon.</p></div></article>
              <article><span>2022 — 2023</span><div><h3>JobLoop • IT-utvikler</h3><p>Opplæring i HTML, CSS, JavaScript og design, med blant annet prosjektlederansvar i Philips Karriere-prosjektet.</p></div></article>
              <article><span>12 år</span><div><h3>Barnehage • Pedagogisk arbeid</h3><p>Lang erfaring med mennesker, samarbeid, kommunikasjon, ansvar og relasjonsarbeid.</p></div></article>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell section skills-section">
          <div className="section-label">03 / KOMPETANSE</div>
          <div className="skills-head"><h2>Det jeg liker å jobbe med.</h2><p>En kombinasjon av kreativt, kommunikativt og teknisk arbeid.</p></div>
          <div className="skill-grid">{skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><b>↗</b></div>)}</div>
        </section>

        <section id="projects" className="section-shell section projects-section">
          <div className="section-label">04 / UTVALGTE PROSJEKTER</div>
          <div className="projects-head"><h2>Prosjekter jeg har laget.</h2><a href="https://github.com/monmath?tab=repositories" className="text-link">Se GitHub ↗</a></div>
          <div className="project-grid">
            {projects.map((project, index) => <a className={`project-card project-${index + 1}`} href={project.link} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-image"><img src={project.image} alt={project.title} /></div>
              <div className="project-info"><div><p>{project.type}</p><h3>{project.title}</h3></div><span>↗</span></div>
            </a>)}
          </div>
        </section>

        <section id="social" className="section-shell section contact-section">
          <div className="contact-panel">
            <div><div className="section-label">05 / KONTAKT</div><h2>La oss lage noe<br /><em>fint sammen.</em></h2></div>
            <div className="contact-right"><p>Har du et prosjekt, en idé eller bare lyst til å ta en prat?</p><a className="contact-mail" href="mailto:monica.mathiassen@gmail.com">monica.mathiassen@gmail.com <span>↗</span></a><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/monmath" target="_blank" rel="noreferrer">GitHub</a></div></div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Monica Mathiassen</span><span>Portfolio / Bergen</span></footer>
    </div>
  );
}

export default App;
