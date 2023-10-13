import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactPage = () => {
    return (
        <Form
            action="mailto:ferbrizie@gmail.com"
            method="post"
            encType="text/plain"
        >
            <h2>Send e-mail to someone@example.com:</h2>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control type="text" name="mail" />
            </Form.Group>

            <Form.Group controlId="formComment">
                <Form.Label>Comment:</Form.Label>
                <Form.Control as="textarea" name="comment" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>

            <Button variant="secondary" type="reset">
                Reset
            </Button>
        </Form>
    );
};

export default ContactPage;

