import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Servicos = () => (
  <section id="services" className="services section-bg">
    <Container>       
      <div className="section-title">
        <h2>Serviços</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <Row>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box">
            <div className="icon"><i className="fas fa-biohazard mr-2"></i></div>
            <h4><a href="">Serviço A</a></h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
            <div className="icon"><i className="fab fa-autoprefixer mr-2"></i></div>
            <h4><a href="">Serviço B</a></h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="fab fa-cloudversify mr-2"></i></div>
            <h4><a href="">Serviço C</a></h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div className="icon-box">
            <div className="icon"><i className="fab fa-docker mr-2"></i></div>
            <h4><a href="">Serviço D</a></h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
          </div>
        </div>
      </Row>
    </Container>
  </section>
);

export default Servicos;



