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

import com.entity.Feedback;
import com.repository.FeedbackRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class FeedbackController {
	
	@Autowired
	private FeedbackRepository fRepo;
	
	@GetMapping("/feedbacks")
	public List<Feedback> getAllBonds() {
		return fRepo.findAll();
	}
	
	
	@PostMapping("/feedbacks")
	public Feedback saveFeedbackDetails(@RequestBody Feedback feedback) {
		return fRepo.save(feedback);
	}
	
	
}
