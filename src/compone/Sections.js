import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row, Form } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
import CrimePatient from './CrimePatient';
import { Link } from "react-router-dom";

export default function Sections (){
    return(
        //types of disasters
        <form>
      <CardGroup>
  <Card>
    <Card.Img variant="top" src="Fire.jpg" />
    <Card.Body>
      <Card.Title>Report a Fire</Card.Title>
      <Card.Text>
      A fire is a large and destructive fire that threatens 
      the lives of people, animals, or property.
       To report a fire, press the button "Report" below...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/CrimePatient"> <button> Report</button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="theft.jpg" />
    <Card.Body>
      <Card.Title>Report a theft</Card.Title>
      <Card.Text>
      Robbery is stealing people's property, causing it to be damaged
      If you see a theft, feel free to report it through the button "Report" below...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/CrimePatient"> <button> Report</button></Link>    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="accidents.jpg" />
    <Card.Body>
      <Card.Title>Report car accidents</Card.Title>
      <Card.Text>
      An accident, in general, is any unplanned event or event that 
      occurs as a result of improper conditions and causes a malfunction or loss.
      If you witness an accident, report it through the button "Report" below
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/CrimePatient"> <button> Report</button></Link>    </Card.Footer>
  </Card>
</CardGroup>
        </form>
    )

}


