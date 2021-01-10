package com.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.dto.EmployeeRequest;
import com.api.model.Employee;
import com.api.repo.DepartmentRepository;
import com.api.repo.EmployeeRepository;

@Service
public class HelperService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	DepartmentRepository departmentRepository;
	
	public void createEmployee(EmployeeRequest employeeRequest) {
		Employee e = new Employee();
		e.setDepartment(departmentRepository.getOne(employeeRequest.getDept()));
		e.setDateOfJoining(employeeRequest.getDateOfJoining());
		e.setFirstName(employeeRequest.getFirstName());
		e.setLastName(employeeRequest.getLastName());
		e.setSalary(employeeRequest.getSalary());
		employeeRepository.save(e);
	}

	public List<Employee> allEmployee() {
		return employeeRepository.findAll();
	}

	public List<Employee> getEmployeesByName(String name) {
		return employeeRepository.findEmployeeByFirstNameIgnoreCaseOrLastNameIgnoreCase(name, name);
	}

}
