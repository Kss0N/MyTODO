import { useEffect, useState } from 'react';
import './App.css';

import MyTodo from './assets/MyTodo.svg';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';





function Navigation() {


  const linkClass = "d-none d-md-block";

  return (<Navbar bg="secondary" expand="md" sticky="top">
    <Container>
      <Navbar.Brand>
        <img src={MyTodo} className="border border-warning" width="64" />
      </Navbar.Brand>
      <Nav className="d-flex">
        <Nav.Item><Nav.Link>
          <i className="bi bi-person-circle"></i><span className={linkClass}>account</span>
        </Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>
          <i className="bi bi-geo-alt"></i><span className={linkClass}>timeline</span>
        </Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link>
          <i className="bi bi-gear"></i><span className={linkClass}>preferences</span>
        </Nav.Link></Nav.Item>
      </Nav>
    </Container>
  </Navbar>);
}
function Sidebar() {

  return (<aside className="border-end border-secondary h-100 px-2">
    <h6 className="display-5 border-bottom pb-2 mb-4 text-center">Nav</h6>

    <Nav activeKey="home" variant="pills" as="ul" className="mb-auto flex-column">
      <Nav.Item as="li">
        <Nav.Link eventKey="home">
          <i className="bi bi-calendar-check"></i> Today
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
  </aside>);
}


export default function App() {
    



  return (<>

    <Navigation/>

    <Row className="border border-danger">
      <Col md={3} className="d-none d-md-block sidebar">
        <Sidebar>

        </Sidebar>
      </Col>
      <Col className="">
        <h1 className="display-1 border-bottom">MyTodo</h1>
      </Col>
    </Row>

  </>);
}