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

import com.entity.Bond;
import com.repository.BondRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class BondController {
	
	@Autowired
	private BondRepository bRepo;
	
	@GetMapping("/bonds")
	public List<Bond> getAllBonds() {
		return bRepo.findAll();
	}
	
	@PostMapping("/bonds")
	public Bond saveBondDetails(@RequestBody Bond bond) {
		return bRepo.save(bond);
	}
	
}
