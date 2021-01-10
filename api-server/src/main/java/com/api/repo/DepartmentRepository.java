package com.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>{

}
