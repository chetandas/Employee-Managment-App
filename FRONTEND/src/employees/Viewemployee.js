import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Viewemployee(){

    //now in this page we need to display the details of that particular user so for that we need to use usestate coz everytime
    //we click view on every employee it should display that employee data


    //initially all the fields are empty
    // const[employee,setEmployee]=useState({
    //     firstname:"",
    //     lastname:"",
    //     email:"",
    // })

    const [employee,setEmployee]=useState([]);

    //now we need that id of the employee whom we want to display
    //but the id is available in url so to retrieve that we use useparam
    const {id}=useParams();

    console.log(id);
    //now send a get request to fetch that employee detials
    // const loademployee=async()=>{
    //     const res=await axios.get(`http://localhost:8080/employees/${id}`);
    //     console.log(res.data);
    //     setEmployee(res.data);
    // }

    // useEffect(()=>{
    //     loademployee();
    // },[]);//adding dependency to avoid infinite looping


    useEffect(() => {
        axios.get(`http://localhost:8080/employees/${id}`).then((res) => {
            console.log(res.data);
            setEmployee(res.data);
        })
    },[]);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Employee Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of Employee Id:{employee.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>FirstName: </b>
                                    {employee.firstname}
                                </li>
                                <li className='list-group-item'>
                                    <b>LastName: </b>
                                    {employee.lastname}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: </b>
                                    {employee.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}
