import react from "react";
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Col, Row, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Home() {
  return (
    <div >
      
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand ><img style={{width:30, height:37}} src="header.jpg"/>Crime</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Home"><img style={{width:30, height:37}}src="home.jpg"/>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="Login"> <img style={{width:30, height:37}} src="user.png" />Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <Carousel style={{
        padding: 10, marginLeft: 400, width: 450, textAlign: "center"
      }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Fire.jpg"
            alt="First slide"

          />
          <Carousel.Caption>
            <h3>fires and destruction </h3>
            <p>A fire is a large, destructive fire that threatens the lives of people, animals or property.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="theft1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Theft and crime</h3>
            <p>To steal is a danger to society because it will cause chaos on the social and economic level.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="phon.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Accidents and disasters</h3>
            <p>Beware, a deadly mobile phone while driving causes accidents, disability and death
              80% of cell phones are the cause of accidents.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="fire1.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="crime.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="crim1.jpg" thumbnail />
          </Col>
        </Row>
      </Container>
      <a href="Login"><button style={{ marginLeft: 1100 }}>Log in </button></a>

    </div>
  )
}

export default Home