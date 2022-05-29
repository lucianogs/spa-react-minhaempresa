import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Sobre = () => (
    <section>
        <Row className='content'>
            <Col lg="12">
                <div className="section-title">
                    <h2>Sobre</h2>
                </div>
            </Col>
            <Col lg="6">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
                </p>
                <ul>
                <li><i className="fas fa-angle-double-right mr-2" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i className="fas fa-angle-double-right mr-2" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i className="fas fa-angle-double-right mr-2" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i className="fas fa-angle-double-right mr-2" aria-hidden="true"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
            </Col>
            <Col lg="6">
                <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="btn-learn-more">Saiba mais</a>
            </Col>
        </Row>
    </section>
);

export default Sobre;



