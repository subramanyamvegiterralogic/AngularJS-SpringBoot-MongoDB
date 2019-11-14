package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, Integer>{

	@Query("{'emp_city':?0}")
	List<Employee> findByCity(String city);

	@Query("{'emp_age':?0}")
	List<Employee> findByAge(int age);

	@Query("{'emp_city':?0, 'emp_age':?1}")
	List<Employee> findByCityAndAge(String city, int age);
	
}
