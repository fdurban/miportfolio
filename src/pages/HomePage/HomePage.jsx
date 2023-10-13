import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    return (
        <Container fluid>
            <Row className="d-flex align-items-center polla">
                <Col sm={12} md={6} className="content">
                    <h1 className="first">Hi! I'm Fernando.</h1>
                    <p>Welcome to my portfolio</p>
                    <p>
                        I'm a former Ironhack student with approximately 6 months of
                        self-taught programming experience.
                    </p>
                    <p>
                        I invite you to explore my projects and connect with me on LinkedIn and GitHub.
                    </p>
                </Col>
                <Col sm={12} md={6} className="home-image-container">
                    <img src='public/IMG_7872-min.JPG' alt="Fernando's Photo" className='HomeImage' />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;


