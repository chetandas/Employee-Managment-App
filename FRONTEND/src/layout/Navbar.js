import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              {/*this is for removing the underline from anchor tag for that we need to keep none in textdecoration*/}
              <Link style={{textDecoration: 'none'}} to={"/"}>
                <a className="navbar-brand" style={{textDecoration: 'none'}} href="http://localhost:3000">Employee Management App</a>
              </Link>
                
                
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/addemployee">
                  <button className='btn btn-outline-light'>Add Employee</button>
                </Link>
                
            </div>
        </nav>
    </div>
  )
}
