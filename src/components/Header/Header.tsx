import React from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import './media.scss';

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={require('./logo-removebg-preview.png')} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            restoreFocus={false}
          >
            <Offcanvas.Header className="justify-content-end" closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="menu  flex-grow-1 pe-3">
                <Nav.Link href="#process">Процесс</Nav.Link>
                <Nav.Link href="#works">Наши работы</Nav.Link>
                <Nav.Link href="#reviews">Отзывы</Nav.Link>
                <Nav.Link href="#form_app">Оставить заявку</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href='tel:+375333333333'>+375 (33) 333-33-33</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
