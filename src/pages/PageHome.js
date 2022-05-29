import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../components/Carousel'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import Servicos from '../components/Servicos';
import Sobre from '../components/Sobre';


const PageHome = () => (
  <>
    <Navigation/>
    <Carousel/>
    <Servicos/>
    <Container className='sobre'>
      <Sobre/>
    </Container>
    <Footer/>
  </>
);

export default PageHome;
