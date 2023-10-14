import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactPage.css'

function ContactPage() {
    const [state, handleSubmit] = useForm("mbjvqyvn");
    if (state.succeeded) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <p className="text-success text-center">Thanks for joining! You will reeive an email as soon as possible.</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col md={6}>
                    <h1> Contact me!</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                id="name"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                id="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                id="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success" disabled={state.submitting}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactPage;


