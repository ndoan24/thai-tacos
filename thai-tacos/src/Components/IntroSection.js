import React from 'react';
import '../App.css';
import { Button } from './Button';
import './IntroSection.css';

function IntroSection() {
  return (
    <div className='intro-container'>
      
      <div className="bg-image">
      
</div>

      <h1>THAI TACOS</h1>
      <h2>What are you waiting for?</h2>
      <p>We are located at South Pearl Street | Farmers Market
        <br></br><br></br> <center>Located in Denver, CO</center></p>
      <div className='intro-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ORDER NOW 
        </Button>
     
      </div>
    </div>


    
  );
}

export default IntroSection;
