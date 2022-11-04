package com.chetan.crud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//entity to map this employee model to db table
@Entity
@Table(name="employees")
public class Employee {
	//this is for primary key in the table
	@Id
	
	//this is for primary key generation
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	//this to add firstname as a field in our sql db
	@Column(name="first_name")
	private String firstname;
	
	
	//same for all
	
	
	@Column(name="last_name")
	private String lastname;
	
	@Column(name="email_id")
	private String email;
	
	
	//make sure uh create a default constructor while creating parameterized const bcoz hibernate internally
	//uses proxy to create proxy objects
	public Employee()
	{
		
	}
	
	public Employee(String firstname, String lastname, String email) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}