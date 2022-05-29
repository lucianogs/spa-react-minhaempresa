import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';

const HomeCarousel = () => (
  <Carousel fade touch className="h-25 w-100">
    <Carousel.Item className="item">
      <img src={banner1} alt="banner1" />
    </Carousel.Item>
    
    <Carousel.Item className="item">
      <img src={banner2} alt="banner2" />
    </Carousel.Item>
    
  </Carousel>
);

export default HomeCarousel;
