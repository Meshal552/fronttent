import react from 'react'
import { Button, Col, Row, Form, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import axios from 'axios';



import React, { useEffect, useState, params } from "react";
import axios from "axios"
export default function Login(props) {
    let [username, setusername] = useState("")
    let [password, setpassword] = useState("")
    function handlesetusername(event) {
        setusername((username = event.target.value));
    }
    function handlepassword(event) {
        setpassword((password = event.target.value));
    }
   
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "https://crim-e.herokuapp.com/api/crime/user/login",
            params: { name: username , password: password}
        })
        .then((res => {
            console.log(res.data)
            if (res.data == "authenticated") {
                 localStorage.setItem("isLoggedln","yes")
                 window.open("/","_self")
            }
            else {
                alert(res.data)
            }
        }))

    }

    return (
        <div >
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} >

                        <Form className='body' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <img  className='text-center 'style={{ width: 200 }} src="login1.jpg" /><br />
                                <label><img style={{ width: 15 }} src="user.png" />{" "}
                                UserName</label>{" "}<br />
                                <Form.Control  onChange={handlesetusername} type="name" placeholder="UserName" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <label><img style={{ width: 15 }} src="lock.jpg" />{" "}
                                Password</label><br />
                                <Form.Control onChange={handlepassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button  
                           value="submit"  variant="primary btn-block" type="submit">Login</Button>{" "}
                           <Link to="/User"><Button  value="submit"  variant="primary btn-block" type="submit">Sing up</Button></Link>
                        </Form>
                        
                    </Col >
                    <Col lg={8} md={6} sm={12}>
                     <img className='w-100' src='log6.jpg'alt=''/>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}


