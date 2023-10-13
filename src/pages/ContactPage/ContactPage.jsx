import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';

function ContactPage() {
    const [state, handleSubmit] = useForm("mbjvqyvn");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
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

            <Button type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </Form>
    );
}

export default ContactPage;

