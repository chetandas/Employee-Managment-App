import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
export default function Addemployee() {
    let navigate=useNavigate();// for redirecting to other page we use usenavigate
    const [fname, setfname] = useState("");//this is for firstname initially firstname is empty string
    const [lname, setlname] = useState("");//this is for lastname initially lastname is empty string
    const [em, setemail] = useState("");//this is for email initially email is empty string


    //when user clicks on submit we call this function
    //make it async bcoz axios is asynchronous and we r using await inside
    const onsubmit=async(e) => {
        e.preventDefault();//we use this bcoz when we submit the form the browser will perform some default action
        //and the url is changed so we dont want that
        const mydata={
            firstname:fname,
            lastname:lname,
            email:em,
        };
        console.log(mydata);
        const res=await axios.post("http://localhost:8080/employees",mydata);
        console.log("data added successfully");
        console.log(res.status);
        if(res.status === 200)//if the response status is successfull
        {
            // then use sweet alerts
            swal({
                title: "Good job!",
                text: "Employee Details Added Successfully!",
                icon: "success",
                button:"Okay!!",
              }); 
        }
        setfname("");
        setlname("");
        setemail("");    
        navigate("/");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Employee</h2>
                    <form onSubmit={(e) => onsubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor="firstame" className='form-label'>
                                FirstName
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Firstname'
                                name='firstname'
                                value={fname}
                                onChange={(e) => setfname(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastame" className='form-label'>
                                LastName
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Lastname'
                                name='lastname'
                                value={lname}
                                onChange={(e) => setlname(e.target.value)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>
                                Email
                            </label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='Enter Your Email Address'
                                name='email'
                                value={em}
                                onChange={(e) => setemail(e.target.value)} required/>
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
