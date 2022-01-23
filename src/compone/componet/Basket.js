import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ServiceBasket from './ServiceBasket';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
export default class Basket extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    componentDidMount(){
        ServiceBasket.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    
    deletitem(id){
       axios.delete(`api/crime/incident/delete/${id}`) 
       .then(res=>{
           const employees=this.state.employees.filter(employee=> employee.id !==id);
           this.setState({employees})
       })
    }
    render() {
        return (
            //<h2>fnuhwbfuhewbhfb</h2>
            <div>
                <h2 className='text-center'>Reports List</h2>
                <div className='row' padding="">
                <Link to="/add" className=''>
                    </Link>{""}
                </div>
                <div >
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th>Report type</th>
                            <th>The location of the report</th>
                            <th>Description of the accident</th>
                            <th>Accident severity status</th>
                            <th>delete</th>
                            <th>Confirm</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                             <td> { employee.type} </td>
                                             <td> {employee.address}</td>
                                             <td> {employee.description}</td>
                                             <td> { employee.cond}</td> 
                                             <td> <button onClick={(event)=> this.deletitem(employee.id,event)}>Delete</button></td>
                                             <td> <button >Confirm</button></td>

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