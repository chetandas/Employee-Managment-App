package com.chetan.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chetan.crud.model.Employee;

@Repository
//we are extending this with jparepo bcoz it provides many methods lyk findall,findallbyid and etc useful
//methods lyk in mongodb so we are inheriting it
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
