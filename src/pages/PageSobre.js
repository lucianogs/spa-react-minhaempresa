import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Sobre from '../components/Sobre';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const PageSobre = () => (
  <div className='sobre'>
    <Navigation/>
    <Container>
      <Row>
        <Col className='nav-breadcrumb' lg="12">
          <NavBreadcrumbs hierarchyList={[{name: 'Sobre', active: true}]}/>
        </Col>
      </Row>
      <Sobre/>
    </Container>
    <Footer/>
  </div>
)

export default PageSobre;
