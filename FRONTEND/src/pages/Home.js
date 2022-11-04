import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
export default function Home() {
    const url = "http://localhost:8080/employees"
    //now we will be adding employees for that we will be using usestate
    const [employees, setEmployees] = useState([]);//initially the details are empty so give empty array
    

    //this below is also working but if we write this inside a function then it will become ez fr us fr deleting the employee
    // useEffect(() => {
    //     axios.get(url).then((res) => {
    //         // console.log(res.data);
    //         setEmployees(res.data);
    //     })
    // }, []);//adding dependency so that to avoid infinite looping

    // const id=useParams();

    //as axios is asynchronous we need to wait for its completion so make func async
    const loademployees=async()=>{
        const res=await axios.get(url)
        setEmployees(res.data);
    }
    
    useEffect(()=>{
        loademployees();//whenever we open the page it will load once all the employees
    },[])//this is array dependency to avoid infinite looping

    //whenever we click on delete we will call delete request along with employee id
    const delemployee=async(id)=>{

        //we are using sweet alert
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this employee details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          //now once user clicks the button then we will call a will delete function
          .then(async (willDelete) => {//make this async bcoz axios is asynchronous
            if (willDelete) {
                await axios.delete(`http://localhost:8080/employees/${id}`)
                loademployees();//after sending delete request then again we need to fetch records from database so that's y call loademployees  
                swal("Poof! Employee Details deleted successfully!", {
                icon: "success",
              });
            } 
            else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    //table is not supported in react so we are writing that logic here itself and storing it inside an array
    //we will call it below which will display in the form of table
    const rows = employees.map((employee, index) => {
        return (
            <tr>
                {console.log(employee.id)}
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>
                    <div class="btn-group">
                        <Link
                            className='btn btn-primary mx-2'
                            to={`/viewemployee/${employee.id}`}
                            >View
                        </Link>
                        
                        {/* here below whenever user clicks edit option we will be redirecting him to edit page with his id added
                        url so for that we cant use normal quotations so instead we will be using back quotes*/}
                        <Link 
                            className='btn btn-outline-primary mx-2'
                            to={`/editemployee/${employee.id}`}
                            >Edit
                        </Link>
                        <button className='btn btn-danger max-2' onClick={()=>delemployee(employee.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    })
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}