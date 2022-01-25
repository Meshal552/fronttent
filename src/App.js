import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Col, Row, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  let loggedIn = localStorage.getItem("isLoggedln")
  if (loggedIn != "yes") {
    return (
      <div>
        
        {/* <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/Login">Login</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/User">user</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
        <Outlet></Outlet>
      </div>
    )
  }
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand >The Safety</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/Crime">User</Nav.Link>
            <Nav.Link href="/Sections">Sections</Nav.Link>
            <Nav.Link href="/CrimePatient">CrimePatient</Nav.Link>
            <Nav.Link href="/Reports">Reporting Center</Nav.Link>
            {/* <Nav.Link href="/Basket">Basket</Nav.Link> */}

            <Nav.Link onClick={() => { localStorage.setItem("isLoggedln", "no"); window.open("/", "_self") }} to='/' >sign out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}
export default App