import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary-success" >
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
                        <Link className="noTextDecor" to={"/aboutme"}>
                            <p style={{ color: "black" }}>About me</p>
                        </Link>
                        <Link className="noTextDecor" to={"/projects"}>
                            <p style={{ color: "black" }}>Projects</p>
                        </Link>
                        <Link className="noTextDecor" to={"/contact"}>
                            <p style={{ color: "black" }}>Contact</p>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
