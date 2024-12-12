import { useEffect, useState } from 'react';
import './App.scss';

import MyTodo from './assets/MyTodo.svg';
import { Button, Col, Container, Nav, Navbar, Overlay, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';





function Navigation() {


  const linkClass = "d-none d-md-block";

  return (<Navbar bg="secondary" expand="md" sticky="top">
    <Container fluid>
      <Navbar.Brand className="border border-warning">
        <img src={MyTodo} width="64" />
      </Navbar.Brand>
      <Nav className="d-flex border border-warning" as="ul">
        <Nav.Item as="li"><Nav.Link>
          <i className="bi bi-person-circle"></i><span className={linkClass}>account</span>
        </Nav.Link></Nav.Item>
        <Nav.Item as="li"><Nav.Link>
          <i className="bi bi-geo-alt"></i><span className={linkClass}>timeline</span>
        </Nav.Link></Nav.Item>
        <Nav.Item as="li"><Nav.Link>
          <i className="bi bi-gear"></i><span className={linkClass}>preferences</span>
        </Nav.Link></Nav.Item>
      </Nav>
    </Container>
  </Navbar>);
}





function Sidebar() {


  return (<aside className="border-end border-secondary h-100 px-2">
    <h6 className="display-6 border-bottom pb-2 mb-4 text-center">Nav</h6>

    <Nav activeKey="home" variant="pills" as="ul" className="mb-auto flex-column">
      <Nav.Item as="li">
        <Nav.Link eventKey="home">
          <i className="bi bi-calendar-check"></i> Today
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="weekly-scope">
          <i className="bi bi-journal-bookmark"></i> Weekly SCOPE
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="quarterly-scope">
          Quarter
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="core-scope">
          Core
        </Nav.Link>
      </Nav.Item>
      <hr />


    </Nav>

    <Container fluid className="d-flex justify-content-center">
      <OverlayTrigger
        placement="right"
        delay={{ show: 500, hide: 400 }}
        overlay={renderToolTipAddProject}
      >
        <Button className="bg-body border-2 text-primary text-center">
          <i className="bi bi-plus-circle"></i>
        </Button>
      </OverlayTrigger>
    </Container>
  </aside>);

  function renderToolTipAddProject(props: object)
  {
    return (<Tooltip {...props}
      
      className="tooltip-add-project"
    >
      <div className="border border-1 border-info px-1 rounded-1">
        Create new project
      </div> 
    </Tooltip>);
  }

}


export default function App() {
    



  return (<>

    <Navigation/>

    <Row className="">
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