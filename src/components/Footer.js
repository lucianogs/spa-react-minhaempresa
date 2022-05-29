import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ExternalLink from './ExternalLink';

const Footer = () => (
  <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form>
              <input type="email" name="email"/><input type="submit" value="Inscreva-se"/>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <Container>
        <Row>
          <Col lg="3" className="footer-contact">
            <h3>MinhaEmpresa</h3>
            <p>
              Projeto - Pós-graduação<br/>
              FullStack<br/><br/>
              <strong>Fone:</strong> 123456<br/>
              <strong>Email:</strong> email@example.com<br/>
            </p>
          </Col>
          <Col lg="3" className="footer-links">
            <h4>Páginas</h4>
            <ul>
              <li><i className="fas fa-angle-right mr-1"></i> <Link to="/">Home</Link></li>
              <li><i className="fas fa-angle-right mr-1"></i> <Link to="/sobre">Sobre</Link></li>
              <li><i className="fas fa-angle-right mr-1"></i> <Link to="/servicos">Serviços</Link></li>
              <li><i className="fas fa-angle-right mr-1"></i> <Link to="/preco">Preços</Link></li>
              <li><i className="fas fa-angle-right mr-1"></i> <Link to="/contato">Contato</Link></li>
            </ul>
          </Col>
          <Col lg="3" className="footer-links">
            <h4>Outros</h4>
            <ul>
              <li><i className="fas fa-angle-right mr-1"></i> <a href="#">Link 1</a></li>
              <li><i className="fas fa-angle-right mr-1"></i> <a href="#">Link 2</a></li>
              <li><i className="fas fa-angle-right mr-1"></i> <a href="#">Link 3</a></li>
              <li><i className="fas fa-angle-right mr-1"></i> <a href="#">Link 4</a></li>
              <li><i className="fas fa-angle-right mr-1"></i> <a href="#">Link 5</a></li>
            </ul>
          </Col>
          <Col lg="3" className="footer-links">
              <h4>Social Networks</h4>
              <p>Minhas redes sociais</p>
              <div className="social-links mt-3">
                <ExternalLink url='https://github.com/lucianogs'><i className="fab fa-github-alt fa-1x" aria-hidden="true"></i></ExternalLink>
                <ExternalLink url='https://www.linkedin.com/in/lucianosouzaux/'><i className="fab fa-linkedin fa-1x" aria-hidden="true"></i></ExternalLink>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className='footer-bottom clearfix'>
        <div className="copyright">
          &copy; Copyright <strong><span>MinhaEmpresa</span></strong>. Todos os direitos reservados
        </div>
        <div className="credits">
          Criado por <ExternalLink url='https://www.linkedin.com/in/lucianosouzaux/'>Luciano Souza</ExternalLink>
        </div>
      </Container>
  </footer>
);

export default Footer;