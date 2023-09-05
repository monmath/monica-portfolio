import React from 'react';
import './skills.css';
import {AiOutlineHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';

import {DiJavascript} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';
import {DiPhotoshop} from 'react-icons/di';


const Skills = () => {
  return (
    <section id='skills'>
   
    <h2>Mine ferdigheter</h2>

  <div className="container skills__container">
    
    <div class="skills">
    <ul class="ch-grid">
      
      <li>    
        <div class="circle"> 
              <div class="mask half">
                  <div class="fill" ></div>
              </div>
              <div class="mask full" >
                  <div class="fill" ></div>
               </div>
               <div class="inside-circle"> </div>
             <AiOutlineHtml5 className='ch-img'/>
              <div class="ch-info">
                  {/*<h3>God kunnskap</h3> */}
                  <p>Html5</p>
              </div>
              </div>
      </li>
          
          <li>    
            <div class="circle"> 
                  <div class="mask half">
                      <div class="fill"></div>
                  </div>
                  <div class="mask full">
                      <div class="fill"></div>
                   </div>
                   <div class="inside-circle"> </div>
                   <DiJavascript className='ch-img'/>
                  <div class="ch-info">
                      {/*<h3>God kunnskap</h3> */}
                      <p>Javascript</p>
                  </div>
                  </div>
          </li>
              
              <li>    
                <div class="circle"> 
                      <div class="mask half">
                          <div class="fill"></div>
                      </div>
                      <div class="mask full">
                          <div class="fill" ></div>
                       </div>
                       <div class="inside-circle"> </div>
                       <DiCss3 className='ch-img'/>
                      <div class="ch-info">
                           {/*<h3>God kunnskap</h3> */}
                          <p>Css</p>
                      </div>
                      </div>
              </li>
              <li>    
                <div class="circle"> 
                      <div class="mask half">
                          <div class="fill" ></div>
                      </div>
                      <div class="mask full">
                          <div class="fill" ></div>
                       </div>
                       <div class="inside-circle"> </div>
                       <DiReact className='ch-img'/>
                      <div class="ch-info">
                          {/*<h3>God kunnskap</h3>*/}
                          <p>React</p>
                      </div>
                      </div>
              </li>

              <li>    
                <div class="circle"> 
                      <div class="mask half">
                          <div class="fill" ></div>
                      </div>
                      <div class="mask full" >
                          <div class="fill" ></div>
                       </div>
                       <div class="inside-circle"> </div>
                       <FiFigma className='ch-img'/>
                      <div class="ch-info">
                          {/*<h3>God kunnskap</h3>*/}
                          <p>Figma</p>
                      </div>
                      </div>
              </li>

              <li>    
                <div class="circle"> 
                      <div class="mask half">
                          <div class="fill"></div>
                      </div>
                      <div class="mask full">
                          <div class="fill"></div>
                       </div>
                       <div class="inside-circle"> </div>
                       <DiPhotoshop className='ch-img'/>
                      <div class="ch-info">
                          {/*<h3>God kunnskap</h3>*/}
                          <p>Photoshop</p>
                      </div>
                      </div>
              </li>
</ul>
</div>
</div>
    
    </section>
  )
}

export default Skills;