import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ServiceReport from './ServiceReport';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
export default class Reports extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    componentDidMount(){
        ServiceReport.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    
    deletitem(id){
       axios.delete(`https://crim-e.herokuapp.com/api/crime/incident/delete/${id}`) 
       .then(res=>{
           const employees=this.state.employees.filter(employee=> employee.id !==id);
           this.setState({employees})
       })

    }
   
    // ubdate(id){
    //     let crim = {"type":"angry", "address":"gahnm","description":"adaeb", "cond":"freebad", "id":id}
    //     axios({

    //         method : "post",
    //         url :   "api/crime/incident/add",
    //         data : crim 
    //         })
    // }
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
                                        <tr key = {employee.name}>
                                             <td> { employee.type} </td>
                                             <td> {employee.address}</td>
                                             <td> {employee.description}</td>
                                             <td> { employee.cond}</td> 
                                             <td> <button onClick={(event)=> this.deletitem(employee.id,event)}>Delete</button></td>
                                        
                                             {/* <td> <button onClick={(event)=> this.ubdate(employee.id,event)}>ubdate</button></td> */}
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