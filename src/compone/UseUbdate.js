import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Button, Col, Row, Form, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function UseUbdate() {
  
  let [Id, setId]= useState("")  
 let [Name, setName] = useState("")
 let [Email, setEmail] =  useState("")
 let [Gender, setGender]= useState("")
 let [Phone, setPhone]= useState("")
 let [Address, setAddress]= useState("")
 let [Password, setPassword]= useState("")
 


 function handlesetId(event) {
    setId((Id = event.target.value));
  }
 function handlesetName(event) {
    setName((Name = event.target.value));
  }
  function handlesetEmail(event) {
    setEmail((Email = event.target.value));
  }
  function handleGender(event) {
    setGender((Gender = event.target.value));
    
  }
  function handlPohne(event){
    setPhone((Phone = event.target.value))
  }
  function handlAddress(event){
    setAddress((Address = event.target.value))
  }

  function handlPassword(event){
    setPassword((Password = event.target.value))
  }
  let myObj={ "id":Id,"name":Name,"password":Password, "email":Email,"gender":Gender, "phone":Phone, "address":Address} //الكلام الي بالبرتغالي هو نفسه الي بجافا الازرق الي فوق
  
  function handleSubmit(event) {
    event.preventDefault(); 
    axios({
        method:"post",
        url:"https://crim-e.herokuapp.com/api/crime/user/add",
        data:myObj,
    })
  }
  return (


<div>
<Container>
                <Row>
                    <Col lg={4} md={6} sm={12} >

                        <Form className='body' onSubmit={handleSubmit} style={{ padding:40}}>
                            <Form.Group className="mb-3" >
                                {/* <img  className='text-center 'style={{ width: 200 }} src="login1.jpg" /><br /> */}
                                <label> Id</label>
                                <Form.Control  onChange={handlesetId} type="name" placeholder="Id" />
                                <label> FirstName</label>
                                <Form.Control  onChange={handlesetName} type="name" placeholder="FirstName" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <label>Email</label>
                               
                                <Form.Control onChange={handlesetEmail} type="Email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <label>Password</label>
                               
                                <Form.Control onChange={handlPassword} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Label >
     Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Mele"
          value="Mele"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange = {handleGender}
        />
        <Form.Check
          type="radio"
          label="Femal"
          value="Femal"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange = {handleGender}
        />
    
      </Col>
                            
                            <Form.Group className="mb-3" >
                                <label>Pohne</label>
                              
                                <Form.Control onChange={handlPohne} type="Pohne" placeholder="Pohne" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <label>Address</label>
                               
                                <Form.Control onChange={handlAddress} type="Address" placeholder="Address" />
                            </Form.Group>
                            <Button  
                           value="submit"  variant="primary btn-block" type="submit">Submit</Button>{" "}
                           
                        </Form>
                        
                    </Col >
                    <Col lg={8} md={6} sm={12}>
                     <img className='w-100' src='sing.jpg'alt=''/>
                    </Col>
                </Row>
            </Container>
</div>

  );
 
  }