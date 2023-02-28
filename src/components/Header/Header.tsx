import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './index.scss';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Neon hameleon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu">
              <Nav.Link href="#home">Процесс</Nav.Link>
              <Nav.Link href="#link">Наши работы</Nav.Link>
              <Nav.Link href="#link">Отзывы</Nav.Link>
              <Nav.Link href="#link">Оставить заявку</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link>+375 (33) 333-33-33</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
