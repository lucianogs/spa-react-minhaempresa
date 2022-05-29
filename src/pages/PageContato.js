import React from 'react';
import { Container, Row, Col } from  'react-bootstrap';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PageContato = () => (
  
  <div className='contact'>
    <Navigation/>
    <Container>
      <Row>
        <Col className='nav-breadcrumb' lg="12">
          <NavBreadcrumbs hierarchyList={[{name: 'Contato', active: true}]}/>
        </Col>
      </Row>
    </Container>
    <section>
      <Container>
        <Col lg="12">
            <div className="section-title">
                <h2>Contato</h2>
            </div>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </Col>
        <Row>
          <Col lg="5" className="d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              <i className="fas fa-map-marker-alt"></i>
                <h4>Endereço:</h4>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
              </div>
              <div className="email">
                <i className="fas fa-mail-bulk"></i>
                <h4>Email:</h4>
                <p>email@example.com</p>
              </div>
              <div className="phone">
              <i className="fas fa-phone-volume"></i>
                <h4>Fone:</h4>
                <p>0 123 456 789</p>
              </div>
            </div>
          </Col>
          <Col lg="7" className="mt-5 mt-lg-0 d-flex align-items-stretch">
            <form>
              <Row>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Seu nome</label>
                  <input type="text" name="nome" className="form-control" id="nome" required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Seu email</label>
                  <input type="email" className="form-control" name="email" id="email" required/>
                </div>
              </Row>
              <div className="form-group">
                <label htmlFor="name">Assunto</label>
                <input type="text" className="form-control" name="assunto" id="assunto" required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Mensagem</label>
                <textarea className="form-control" name="mensagem" rows="10" required></textarea>
              </div>
              <div className="text-center">
                <button className="cont-btn" type="submit">Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
  </div>
)

export default PageContato;