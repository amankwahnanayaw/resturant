import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={ images.G } alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur distinctio voluptatum soluta odit accusantium minima voluptas odio fuga molestiae velit nesciunt neque dolorem repellat corrupti, eum commodi pariatur saepe sed.</p>
        <button type='button' className='custom__button'>Know More</button>

      </div>
    </div>
  </div>
);

export default AboutUs;
