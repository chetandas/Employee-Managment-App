package com.chetan.crud.controller;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chetan.crud.exception.ResourceNotFoundException;
import com.chetan.crud.model.Employee;
import com.chetan.crud.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")//for connecting with the frontend
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	
	//when we click employees in url we will be mapped to this
	@GetMapping("/employees")
	List<Employee> getallEmployees()
	{
		return employeeRepository.findAll();
	}
	
	//now this is for creating employee for that below is the rest api
	@PostMapping("/employees")//postmapping bcoz this will handle all the post request
	Employee newemployee(@RequestBody Employee newemployee)//we are mapping the json obj with this
	{
		return employeeRepository.save(newemployee);//in this we storing the employee details and then returnin the repo
		
	}
	
	//now this is for editing the employee details for that we need to know just his id so send a get reqeust
	//to database and get his details
	//here if the details are not found then throw a exception saying resouce not found
	@GetMapping("employees/{id}")
	Employee getemployeebyid(@PathVariable long id)
	{
		return employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException(id));
	}
	
	
	//now when the user clicks edit button we need his details so find it
	//then edit those details and put them in database so for that use put request
	@PutMapping("/employees/{id}")
	Employee updateemployee(@RequestBody Employee newemp,@PathVariable long id)
	{
		return employeeRepository.findById(id).map(emp->{
			emp.setFirstname(newemp.getFirstname());
			emp.setLastname(newemp.getLastname());
			emp.setEmail(newemp.getEmail());
			return employeeRepository.save(emp);
		}).orElseThrow(()->new ResourceNotFoundException(id));
	}
	
	
	//this is for deleting the employee for that we need his id
	@DeleteMapping("employees/{id}")
	String deleteemployee(@PathVariable long id)
	{
		if(!employeeRepository.existsById(id))//if his id doesnt exists then throw an exception
		{
			throw new ResourceNotFoundException(id);
		}
		employeeRepository.deleteById(id);//else if it exists then delete it
		return "Employee with id"+id+" has been deleted successfully";
	}
}
