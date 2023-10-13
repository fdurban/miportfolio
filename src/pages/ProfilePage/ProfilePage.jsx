import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <Container fluid>
            <Row className="d-flex align-items-center full-height-row1">
                <Col sm={12} md={6} className="profile-text">
                    <h1>A bit more about me</h1>
                    <p>Hello, I'm Fernando Durban, a passionate technology enthusiast and recent 22-year-old graduate. I completed my Bachelor's degree in Business Administration and Management
                        at IE University in Madrid. Driven by my love for technology,
                        I embarked on a new career path by joining the Ironhack Bootcamp in Madrid, where I specialized in Full Stack development.</p>

                    <p>During my time at Ironhack, I gained solid skills in web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                        These technologies allowed me to create full-fledged projects, spanning from backend to frontend, delivering efficient and visually appealing solutions.
                        In my bootcamp projects, I primarily focused on building responsive and navigable web applications.</p>

                    <p>Prior to my transition into web development, I gained valuable customer service experience working in a fashion company. From 2016 to 2018,
                        I also worked in warehousing and took part in modeling projects within the same company.
                        These experiences honed my communication skills, teamwork abilities, and attention to detail.</p>

                    <p>Combining my business background with technical expertise, I possess a unique perspective to tackle complex challenges.
                        As a passionate problem-solver, I am constantly seeking new ways to leverage technology to innovate and make an impact.</p>

                    <p>I am excited about opportunities that allow me to apply my skills and collaborate on dynamic projects in the technology industry.
                        Feel free to connect with me on LinkedIn or email me at ferbrizie@gmail.com if you'd like to connect or discuss potential collaborations.</p>

                    <p>Thank you, and I look forward to connecting with you soon</p>
                </Col>
                <Col sm={12} md={6} className="profile-images">
                    <img src="public/_DSC8366.jpg" alt="Image 1" className="ImageIndividual" />
                    <img src="public/_DSC8367.jpg" alt="Image 2" className="ImageGroup" />
                </Col>
            </Row>
        </Container>

    );
}

export default ProfilePage;
