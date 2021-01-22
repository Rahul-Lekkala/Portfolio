import React from 'react';
import { Container } from 'components/common';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper, Details } from './styles';

export const Experience = () => (
  <Wrapper as={Container} class="exp-container" id="experience">
    <Details>
      <h2>Experience</h2>
      <h3>Education</h3>
    <div class="experience">					
      <div class="experience row">
        <div class="col-md-6">
          <h4>B.Tech</h4>
          <p class="experience-period">
            2018
          </p>
        </div>
        <div class="col-md-6">
          <h4 class="experience-title">CBIT(Computer Science)</h4>
         
            <span class="experience-details">
              <p class="experience-period">CGPA: 8.3</p>
            </span>
          
        </div>
      </div>

      <div class="experience row">
        <div class="col-md-6">
          <h4>Inermediate</h4>
          <p class="experience-period">
            2014
          </p>
        </div>
        <div class="col-md-6">
          <h4 class="experience-title">Sri Chaintanya</h4>
            <span class="experience-details">
              <p class="experience-period">Score: 97.8%</p>
            </span>
          
        </div>
      </div>

      <div class="experience row">
        <div class="col-md-6">
          <h4>School</h4>
          <p class="experience-period">
            2012
          </p>
        </div>
        <div class="col-md-6">
          <h4 class="experience-title">Oasis Public School</h4>
            <span class="experience-details">
              <p class="experience-period">GPA: 9.8</p>
            </span>
          
        </div>
      </div>
              
          
      </div>
      
    <h3>Career</h3>
    <div class="experience">

					
      <div class="experience row">
        <div class="col-md-6">
          <h4>EA Games</h4>
          <p class="experience-period">
            May 2018				- 
            Present			</p>
        </div>
        <div class="col-md-6">
        <h4 class="experience-title">Fulltime - Software Engineer</h4>
          <p>
            <span class="hidden-phone">
              Working as a Software Engineer on FIFA21 game, where I develop scripts that simulate large number of players, report if the servers functionally fails or debug if clients failed...</span>
          </p>
        </div>
      </div>
      
    </div>
    </Details>
  </Wrapper>
);
