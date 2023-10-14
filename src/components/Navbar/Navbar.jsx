import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom'
function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary-success">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img
                            src="/images/F_D-logos_transparent.png"
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/aboutme"} className="nav-link">
                            <span className="link-text">About me</span>
                        </Link>
                        <Link to={"/projects"} className="nav-link">
                            <span className="link-text">Projects</span>
                        </Link>
                        <Link to={"/contact"} className="nav-link">
                            <span className="link-text">Contact</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavbarComponent;

