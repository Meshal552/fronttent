import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Service from './Service';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

export default class Crime extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    addEmployee=()=>{
        this.props.history.push("add");
    }
    componentDidMount(){
        Service.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    deletitem(id){
        axios.delete(`https://crim-e.herokuapp.com/api/crime/user/delete/${id}`) 
        .then(res=>{
            const employees=this.state.employees.filter(employee=> employee.id !==id);
            this.setState({employees})
        })
 
     }
    render() {
        return (
            <div>
                <h2 className='text-center'>User List</h2>
                <div className='row' padding="">
                
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th>ID</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Adderss</th>
                            <th>Delete</th>
                            <th>Ubdate</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                            <td> { employee.id} </td>
                                             <td> { employee.name} </td>
                                             <td> {employee.email}</td>
                                             <td> {employee.gender}</td>
                                             <td> {employee.phone}</td>
                                             <td> {employee.address}</td>
                                             <td> <button onClick={(event)=> this.deletitem(employee.id,event)}>Delete</button></td>
                                              <td ><button> <Link to="/UseUbdate" ></Link>Ubdate</button></td>
                                             
                                        </tr>
                                    )
                                }
                               
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
