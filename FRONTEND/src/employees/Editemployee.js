import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import swal from 'sweetalert';
export default function Editemployee() {
    let navigate=useNavigate();
    const {id}=useParams()
    console.log(id);

    //here use usestate to store the employee detials whom we want to edit so that we can display them on the page as it loads
    const [employee, setemployee]=useState({
        firstname:"",
        lastname:"",
        email:"",
    })

    const {firstname,lastname,email} =employee;

    const onipchange=(e) =>{
        setemployee({...employee, [e.target.name]: e.target.value})
    }


    //write above bcoz it will give error if uh write down
    const loademployee=async()=>{
        const res=await axios.get(`http://localhost:8080/employees/${id}`);
        console.log(res.data);
        setemployee(res.data);
    }
    useEffect(()=>{
        loademployee();
    },[])
    const onsubmit=async(e) => {
        e.preventDefault();
        // const mydata={
        //     firstname:fname,
        //     lastname:lname,
        //     email:em,
        // };
        const res=await axios.put(`http://localhost:8080/employees/${id}`,employee);//send put request bcoz we edited the details and again we
        //want to isnert it in same place

        if(res.status === 200)
        {
            swal({
                title: "Good job!",
                text: "Employee Details Updated Successfully!",
                icon: "success",
                button: "Aww yiss!",
              });
        }
        console.log("data added successfully");   
        navigate("/");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Employee</h2>
                    <form onSubmit={(e) => onsubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="firstame" className='form-label'>
                                FirstName
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Firstname'
                                name='firstname'
                                value={firstname}
                                onChange={(e) => onipchange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastame" className='form-label'>
                                LastName
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Lastname'
                                name='lastname'
                                value={lastname}
                                onChange={(e) => onipchange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>
                                Email
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Email Address'
                                name='email'
                                value={email}
                                onChange={(e) => onipchange(e)} />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>Submit</button>
                        <Link to="/">
                            <button type="submit" className='btn btn-outline-danger mx-2'>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
