import axios from "axios";
import react from "react";
import React, { useEffect, useState } from 'react'
import { Outlet,NavLink ,  useSearchParams} from "react-router-dom";
import { Col, Row, Form,Button,Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function CrimePatient(){
let [type, setType] = useState ("")
let [address, setAddress] = useState ("")
let [description, sesDescription] = useState ("")
let [cond, setCond] = useState ("")
//function from send the value
function handlesetType(event){
    setType ((type = event.target.value));
}
function hanlesetAddress(event){
    setAddress((address = event.target.value));
}
function handlesetDesciption(event){
    sesDescription((description = event.target.value));
}
function handlesetCond(event){
    setCond((cond = event.target.value));
}
// users":[{"id":}]
// crim object/ the world in orange It is the attribut in the database and world in blu in the useState
let crim = {"type":type, "address":address,"description":description, "cond":cond}
function handleSubmit(event){
    event.preventDefault();
    axios({
    method : "post",
    url :   "https://crim-e.herokuapp.com/api/crime/incident/add",
    data : crim 
    })
}

    return(
        <main >
         <Container>
  <Row>
  <Col lg={4} md={6} sm={12} style={{ padding:40}} > 
<Form  className='body' onSubmit={handleSubmit}>

   
      <Form.Label>Reporting type</Form.Label>
      <Form.Control   
          value={type}
          name="type" type="text"  placeholder="type of accident"
          onChange={handlesetType} />
   

    <br/>
      <Form.Label>Address</Form.Label>
      <Form.Control type="text"  value = {address}
          name = "Address" placeholder="The accident location"
          onChange={hanlesetAddress} />
    
   

  
    <br/>
      <Form.Label>Describe the accident</Form.Label>
      <Form.Control   
          type = "text"
          name = "Name"
          placeholder ="Describe the accident"
          onChange = {handlesetDesciption} />
    

  <br/>
 
      <Form.Label >
      Accident case
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Stable"
          value="Stable"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange = {handlesetCond}
        />
        <Form.Check
          type="radio"
          label="UnStable"
          value="UnStable"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange = {handlesetCond}
        />
    
      </Col>
   <br/>
  
  <Button variant="primary"  type="submit">
    Submit
  </Button>
</Form>
</Col>
                <Col lg={8} md={8} sm={19} style={{ padding:25,}}>
                     <img className='w-100' src='safy.jpg'alt=''/>
                    </Col>
  </Row>
  </Container>


            {/* <form onSubmit={handleSubmit}>
                
                 <br />
        <input
          type="text"
          value={type}
          name="type"
          placeholder="type of accident"
          onChange={handlesetType}
        />
         <br />
        <input
          type = "text"
          value = {address}
          name = "Address"
          placeholder="The accident location"
          onChange={hanlesetAddress}
        />
         <br />
        <input
          type = "text"
          name = "Name"
          placeholder ="Describe the accident"
          onChange = {handlesetDesciption}
        />
         <br />
        <input
          type = "text"
          name = "Name"
          placeholder = "accident case"
          onChange = {handlesetCond}
        />
        <br/>
        <br/>
         <input type={"submit"} name="submit"/>
            </form> */}
            <Outlet/>
        </main>
    )
}
export default CrimePatient;