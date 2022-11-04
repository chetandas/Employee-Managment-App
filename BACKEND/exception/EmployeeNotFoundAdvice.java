package com.chetan.crud.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
//now when exception is given we need to throw advice to so for that create a key value pair
public class EmployeeNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(ResourceNotFoundException.class)//this means if uh are getting request not found exception
	//then send request to this class which will handle it by sending appropriate message 
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String,String> exceptionHandler(ResourceNotFoundException exception)
	{
		Map<String,String> errormap=new HashMap<>();
		errormap.put("errormessage", exception.getMessage());
		return errormap;
	}
}
