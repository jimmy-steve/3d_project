import React, { useState } from 'react';
import Nav from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Faire quelque chose avec les valeurs des champs de formulaire
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('IsChecked:', isChecked);
    };

    return (
        <>
            <Nav/>
            <Container fluid>
                <Row className="mt-2">
                    <Col xs={12}>
                        <h1 className="text-center">Contact Form</h1>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs={12} md={6} className="mx-auto p-5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" checked={isChecked} onChange={handleCheckboxChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactForm;
