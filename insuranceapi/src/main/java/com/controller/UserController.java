package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;
import com.repository.UserRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserRepository uRepo;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return uRepo.findAll();
	}
	
	@PostMapping("/users")
	public User saveUserDetails(@RequestBody User user) {
		return uRepo.save(user);
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Long id) {
		uRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
