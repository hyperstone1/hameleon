import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import './media.scss';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Neon hameleon</Navbar.Brand> */}
          <Navbar.Brand href="#home">
            <img className="logo" src={require('./logo-removebg-preview.png')} alt="logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header className="justify-content-end" closeButton>
              {/* <Navbar.Brand href="#home">
                <img className="logo" src={require('./logo-removebg-preview.png')} alt="logo" />
              </Navbar.Brand> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="menu  flex-grow-1 pe-3">
                <Nav.Link href="#process">Процесс</Nav.Link>
                <Nav.Link href="#works">Наши работы</Nav.Link>
                <Nav.Link href="#reviews">Отзывы</Nav.Link>
                <Nav.Link href="#form_app">Оставить заявку</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              </Nav>

              <Nav>
                <Nav.Link>+375 (33) 333-33-33</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
