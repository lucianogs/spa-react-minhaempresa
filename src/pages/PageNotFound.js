import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PageNotFound = () => (
  <>
  <Navigation/>
  <Container>
    <Row>
      <Col className='nav-breadcrumb' lg="12">
        <NavBreadcrumbs hierarchyList={[{name: '404', active: true}]}/>
      </Col>
    </Row>
  </Container>
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <div className="section-title">
            <i className="text-secondary fas fa-skull-crossbones fa-8x" aria-hidden="true"></i><h2>404</h2>
            <p>Página não funcionando</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <Footer/>
  </>
);

export default PageNotFound;