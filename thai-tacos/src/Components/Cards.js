import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Food!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tacos3.jpg'
              text='Explore our Thai Tacos inspired'
              label='Thai Tacos'
              path='/menu'
            />
            <CardItem
              src='images/tacos1.jpg'
              text='Get a taste of our soup'
              label='Soup'
              path='/menu'
            />


<CardItem
              src='images/tacos2.jpg'
              text='On a warm or cold day'
              label='Soup'
              path='/menu'
            />
          </ul>

          <CardItem
              src='images/tacos4.jpg'
              text='$3 per taco'
              label='Thai Tacos'
              path='/menu'
            />
          <ul className='cards__items'>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
