package com.chetan.crud.exception;

//whenever a record is not existing in db then the api will throw the exception
//and it will return a not found status to user
//whenever a resources is not existing in db we can throw exception thats y we are creating this
public class ResourceNotFoundException extends RuntimeException {
	
	public ResourceNotFoundException(Long id)
	{
		super("Could not find the employee with id"+ id);
	}

}
