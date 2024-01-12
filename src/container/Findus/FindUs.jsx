import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Fourth Norla Street, Labone</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className='p__opensans'>Mon- Fri: 12:30 - 11 pm</p>
        <p className='p__opensans'>Sat: 12:30 - 11 pm (Brunch till 4 pm)</p>
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
