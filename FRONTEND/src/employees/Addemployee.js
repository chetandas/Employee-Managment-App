import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
export default function Addemployee() {
    let navigate=useNavigate();
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [em, setemail] = useState("");

    const onsubmit=async(e) => {
        e.preventDefault();
        const mydata={
            firstname:fname,
            lastname:lname,
            email:em,
        };
        console.log(mydata);
        const res=await axios.post("http://localhost:8080/employees",mydata);
        console.log("data added successfully");
        console.log(res.status);
        if(res.status === 200)
        {
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
