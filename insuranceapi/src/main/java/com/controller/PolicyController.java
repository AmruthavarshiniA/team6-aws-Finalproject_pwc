package com.controller;

import java.util.List;
import java.util.Optional;

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

import com.entity.Policy;
import com.repository.PolicyRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class PolicyController {
	
	@Autowired
	private PolicyRepository pRepo;
	
	@GetMapping("/policies")
	public List<Policy> getAllPolicies() {
		return pRepo.findAll();
	}
	
	//@GetMapping("/policies/{id}")
	//public Optional<Policy> getPolicyById(@PathVariable Long id) {
	//	return pRepo.findById(id);
	//}
	
	@GetMapping("/policies/{id}")
	public Policy getPolicyById(@PathVariable Long id) {
		return pRepo.findById(id).get();
	}

	
	@PostMapping("/policies")
	public Policy savePolicyDetails(@RequestBody Policy policy) {
		return pRepo.save(policy);
	}
	
	@PutMapping("/policies")
	public Policy updatePolicy(@RequestBody Policy policy) {
		return pRepo.save(policy);
	}
	
	@DeleteMapping("/policies/{id}")
	public ResponseEntity<HttpStatus> deletePolicyById(@PathVariable Long id) {
		pRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
