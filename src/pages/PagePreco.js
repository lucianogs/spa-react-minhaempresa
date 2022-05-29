import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePreco = () => {
  
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
      <section id="pricing" className="pricing">
        <Container>
          <Col lg="12">
            <div className="section-title">
              <h2>Preços</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          </Col>
          <Row>
            <Col lg="3" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <h3>Serviço A</h3>
                <h4><sup>R$</sup>200<span>por mês</span></h4>
                <ul>
                  <li><i className="fas fa-angle-double-right"></i> Quam adipiscing vitae proin</li>
                  <li><i className="fas fa-angle-double-right"></i> Nec feugiat nisl pretium</li>
                  <li><i className="fas fa-angle-double-right"></i> Nulla at volutpat diam uteera</li>
                  <li className="na"><i className="fas fa-angle-double-right"></i> <span>Pharetra massa massa ultricies</span></li>
                  <li className="na"><i className="fas fa-angle-double-right"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="buy-btn">Contratar</a>
              </div>
            </Col>
            <Col lg="3" data-aos="fade-up" data-aos-delay="200">
              <div className="box featured">
                <h3>Serviço B</h3>
                <h4><sup>R$</sup>300<span>por mês</span></h4>
                <ul>
                  <li><i className="fas fa-angle-double-right"></i> Quam adipiscing vitae proin</li>
                  <li><i className="fas fa-angle-double-right"></i> Nec feugiat nisl pretium</li>
                  <li><i className="fas fa-angle-double-right"></i> Nulla at volutpat diam uteera</li>
                  <li><i className="fas fa-angle-double-right"></i> Pharetra massa massa ultricies</li>
                  <li><i className="fas fa-angle-double-right"></i> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="buy-btn">Contratar</a>
              </div>
            </Col>
            <Col lg="3" data-aos="fade-up" data-aos-delay="300">
              <div className="box">
                <h3>Serviço C</h3>
                <h4><sup>R$</sup>500<span>por mês</span></h4>
                <ul>
                  <li><i className="fas fa-angle-double-right"></i> Quam adipiscing vitae proin</li>
                  <li><i className="fas fa-angle-double-right"></i> Nec feugiat nisl pretium</li>
                  <li><i className="fas fa-angle-double-right"></i> Nulla at volutpat diam uteera</li>
                  <li><i className="fas fa-angle-double-right"></i> Pharetra massa massa ultricies</li>
                  <li><i className="fas fa-angle-double-right"></i> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="buy-btn">Contratar</a>
              </div>
            </Col>
            <Col lg="3" data-aos="fade-up" data-aos-delay="300">
              <div className="box">
                <h3>Serviço D</h3>
                <h4><sup>R$</sup>700<span>por mês</span></h4>
                <ul>
                  <li><i className="fas fa-angle-double-right"></i> Quam adipiscing vitae proin</li>
                  <li><i className="fas fa-angle-double-right"></i> Nec feugiat nisl pretium</li>
                  <li><i className="fas fa-angle-double-right"></i> Nulla at volutpat diam uteera</li>
                  <li><i className="fas fa-angle-double-right"></i> Pharetra massa massa ultricies</li>
                  <li><i className="fas fa-angle-double-right"></i> Massa ultricies mi quis hendrerit</li>
                </ul>
                <a href="#" className="buy-btn">Contratar</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default PagePreco;