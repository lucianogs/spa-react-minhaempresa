import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExperienceTable from '../components/ExperienceTable';
import servicosData from '../data/servicosData';
import Servicos from '../components/Servicos';

const PageServicos = () => {
  const servicosLista = servicosData.servicos;  
  
  return (

    <div className='servicos'>
      <Navigation/>
      <Container>
        <Row>
          <Col className='nav-breadcrumb' lg="12">
            <NavBreadcrumbs hierarchyList={[{name: 'Serviços', active: true}]}/>
          </Col>
        </Row>
      </Container>
      <Servicos/>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="section-title">
                <h2>Serviços realizados</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
            </Col>
            <Col lg="12">
              <ExperienceTable experienceList={servicosLista} />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>

  );
}

export default PageServicos;