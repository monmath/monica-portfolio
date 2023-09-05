import React from 'react';
import './projects.css';

import IMG01 from '../../assets/Pseudo_elements.png';
import IMG02 from '../../assets/Transitions.png';
import IMG03 from '../../assets/Calculator.png';
import IMG04 from '../../assets/Todo-list.png';
import IMG05 from '../../assets/drum_machine.jpg';
import IMG06 from '../../assets/prosjekt-phillips.png';

import { Navigation, 
         Pagination, 
         Keyboard, 
         EffectCoverflow,
        } 
         from 'swiper/modules';

import { Swiper, 
         SwiperSlide } 
         from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";





const Projects = () => {
  return (
    <section id='projects'>
      <h2>Mine Prosjekter</h2>

    <Swiper className ="container projects__container"
           breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
         
          effect={'coverflow'}
          centeredSlides= {true}
          slidesPerView={'auto'}
          spaceBetween={30}
          
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}

          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          
          modules={[Keyboard, 
                    Pagination, 
                    Navigation,
                    EffectCoverflow,
          ]} 
      >
        
    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://github.com/monmath?tab=repositories">
            <div className='projects__item-image'>
            <img src={IMG01}  alt="img" />
            <h3>Pseudo Elements</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://github.com/monmath?tab=repositories">
            <div className='projects__item-image'>
            <img src={IMG02}  alt="img" />
            <h3>Transitions</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://github.com/monmath?tab=repositories">
            <div className='projects__item-image'>
            <img src={IMG03}  alt="img" />
            <h3>Calculator</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://github.com/monmath?tab=repositories">
            <div className='projects__item-image'>
            <img src={IMG04}  alt="img" />
            <h3>Todo List</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://github.com/monmath?tab=repositories">
            <div className='projects__item-image'>
            <img src={IMG05}  alt="img" />
            <h3>Drum Machine</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className='projects-item'>
          <a href="https://www.phillipskarriere.no/">
            <div className='projects__item-image'>
            <img src={IMG06}  alt="img" />
            <h3>Prosjekt Phillips</h3>
          </div>
          </a>
          </div>
    </SwiperSlide>
   
    </Swiper>
    </section>
  );
};

export default Projects;

