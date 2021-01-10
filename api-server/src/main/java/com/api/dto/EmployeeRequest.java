package com.api.dto;

import java.sql.Date;

import javax.validation.constraints.NotEmpty;

public class EmployeeRequest {

	@NotEmpty(message ="First name can't be empty")
    private String firstName;
	
	
    private String lastName;
	private Date dateOfJoining;
    private float salary;
    private long dept;
    
    
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	public long getDept() {
		return dept;
	}
	public void setDept(long dept) {
		this.dept = dept;
	}
	@Override
	public String toString() {
		return "EmployeeRequest [firstName=" + firstName + ", lastName=" + lastName + ", dateOfJoining=" + dateOfJoining
				+ ", salary=" + salary + ", dept=" + dept + "]";
	}
    
    
}
