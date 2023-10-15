import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import './ProjectsPage.css';
import { Col, Row } from 'react-bootstrap'

const ProjectsPage = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);

    const handleShowModal4 = () => setShowModal4(true);
    const handleCloseModal4 = () => setShowModal4(false);

    return (
        <div >
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/IYDPhoto.png"
                        alt="First slide"
                        onClick={handleShowModal1}
                    />
                    <Carousel.Caption>
                        <h3>IYD</h3>
                        <p onClick={handleShowModal1}>Click for details</p>
                        <a href="https://iyd.netlify.app/" target="_blank" rel="noopener noreferrer">Go to deployed website</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/TicTacToePhoto.png"
                        alt="Second slide"
                        onClick={handleShowModal2}
                    />
                    <Carousel.Caption>
                        <h3>Tic Tac Toe</h3>
                        <p onClick={handleShowModal2}>Click for details</p>
                        <a href="https://peaceful-rolypoly-9a626e.netlify.app/" target="_blank" rel="noopener noreferrer">Go to deployed website</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/ToDoPhoto.png"
                        alt="Third slide"
                        onClick={handleShowModal3}
                    />
                    <Carousel.Caption className="custom-caption-black">
                        <h3>To Do App</h3>
                        <p onClick={handleShowModal3}>Click for details</p>
                        <a href="https://main--sprightly-frangipane-5e88d4.netlify.app/" target="_blank" rel="noopener noreferrer">Go to deployed website</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/CanastaPhoto.png"
                        alt="Third slide"
                        onClick={handleShowModal4}
                    />
                    <Carousel.Caption >
                        <h3>Canasta</h3>
                        <p onClick={handleShowModal4}>Click for details</p>
                        <a href="https://magical-melomakarona-0bdb82.netlify.app/" target="_blank" rel="noopener noreferrer">Go to deployed website</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Modal show={showModal1} onHide={handleCloseModal1}>
                <Modal.Header closeButton>
                    <Modal.Title>Ironhack Final Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        "Is Your Day" is a Full Stack app developed in collaboration with my colleague, Cristian Mausque. Our idea was to create an app based on the same principle that students use to study, by making small paper cards where they summarize topics before an exam. The first card contains the entire content of a topic, while the subsequent cards have progressively less content to make it easier for students to memorize.
                    </p>

                    <p>
                        The app features a user interface that allows students to create their own profiles, design cards, save them, and like cards created by other students, making the app more interactive and user-friendly. We achieved this by using technologies such as JavaScript, React, and Bootstrap for the frontend, and Node.js, Express, MongoDB, and JWT for the backend.
                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal2} onHide={handleCloseModal2}>
                <Modal.Header closeButton>
                    <Modal.Title>Tic Tac Toe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Welcome to my Tic Tac Toe App. The primary goal of creating this app was to reinforce my understanding of complex React concepts during my time at the Bootcamp.
                        The app is fully functional and ready for players to enjoy. Please note that it doesn't rely on a database; it uses local storage for data management. It's worth mentioning that I'm currently working on it, and while it's not fully completed, it's almost done. The core technologies employed in this project include JavaScript and React. I hope you find it enjoyable and that it proves useful!
                    </p>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal3} onHide={handleCloseModal3}>
                <Modal.Header closeButton>
                    <Modal.Title>To Do App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Welcome to my To-Do App. I developed this application together with my colleague Cristian Mausque immediately after completing the Web Development Bootcamp at IronHack.
                        This project served as a practical exercise to apply the concepts we had learned during the bootcamp, including user interface design,
                        session management, working with non-relational databases, and performing CRUD operations, among others.
                    </p>
                    <p>
                        The To-Do App is a straightforward web application that enables users to manage their tasks within specific time periods. Users can register via email, create tasks, and access their personal information.
                        One of the main challenges we encountered during this project was implementing a smooth and efficient way for users to edit or delete tasks directly from the same interface where they created them.
                        This required a thorough review of React and presented a rewarding challenge.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal3}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal4} onHide={handleCloseModal4}>
                <Modal.Header closeButton>
                    <Modal.Title>Canasta Productions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Welcome to my first project as a freelance developer. In this case, my colleague Cristian and I are working on the website for the rebranding of Canasta Productions.
                        Our main challenge is to create a superior web application compared to their existing one. Canasta Productions already had a significant amount of UI work done, including the logo, animations, and other features.
                    </p>
                    <p>
                        This project is entirely built using JavaScript and React for the user interface. There are several remaining tasks for the project, including implementing a non-scrolling page view, enhancing user interfaces, refining color schemes, and optimizing the visualization of music videos (which are the main product of Canasta Productions).
                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal4}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default ProjectsPage;
