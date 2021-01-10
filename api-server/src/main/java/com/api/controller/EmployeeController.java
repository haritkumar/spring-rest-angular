package com.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.dto.AuthenticationBean;
import com.api.dto.EmployeeRequest;
import com.api.model.Employee;
import com.api.service.HelperService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {

	static final Logger log = 
	        LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	HelperService helperService;
	
	@PostMapping("/employee")
    public ResponseEntity<EmployeeRequest> createEmployee(@Valid @RequestBody EmployeeRequest employeeRequest) {
		log.info("Creating employee: {}",employeeRequest.toString());
		helperService.createEmployee(employeeRequest);
        return new ResponseEntity<>(employeeRequest, HttpStatus.CREATED);
    }
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployees() {
		 return new ResponseEntity<>(helperService.allEmployee(), HttpStatus.OK);
	}
	
	@GetMapping("/employees/{name}")
	public ResponseEntity<List<Employee>> getEmployeesByName(@PathVariable String name) {
		log.info("Search employees, token: {}",name);
		List<Employee> employees = helperService.getEmployeesByName(name);
		return employees.isEmpty() ? new ResponseEntity<>(employees, HttpStatus.NO_CONTENT)
				: new ResponseEntity<>(employees, HttpStatus.OK);
	}
	
	@GetMapping(path = "/basicauth")
    public AuthenticationBean basicauth() {
		log.info("Validating user");
        return new AuthenticationBean("You are authenticated");
    }
}
