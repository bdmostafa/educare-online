import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <Row className="text-center">
                        <h3>Trusted By 100+ Leading Colleges, Universities, And Organizations. Featured & Mentioned In  Many More Companies</h3>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col><img className="w-50" src="https://i.imgur.com/2N16tnX.png" alt=""/></Col>
                        <Col><img className="w-50" src="//i.imgur.com/7O3PUND.png" alt=""/></Col>
                        <Col><img className="w-50" src="https://i.imgur.com/kjbE7Wi.png" alt=""/></Col>
                        <Col><img className="w-50" src="https://i.imgur.com/bQpqkDs.png" alt=""/></Col>
                        <Col><img className="w-50" src="https://i.imgur.com/Pjy3eMl.png" alt=""/></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default Testimonial;