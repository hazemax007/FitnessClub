package com.example.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fitness.dao.RatingDAO;
import com.example.fitness.entity.Rating;

@RestController
@RequestMapping("/rating")
@CrossOrigin("*")
public class RatingController {
	@Autowired
	private RatingDAO ratingDAO;
	
	@GetMapping("/getRatingByExerciseIdAndUserId/{exerciseId}/user/{userId}")
    public Rating getRatingByExerciseIdAndUserId(@PathVariable("exerciseId") Long exerciseId, @PathVariable("userId") Long userId) {
        return ratingDAO.getRatingByExerciseIdAndUserId(exerciseId, userId);
    }
	
	@GetMapping("/getRating/{rating-id}")
	@ResponseBody
	public Rating getRatingById(@PathVariable("rating-id") Long ratingid) {
		return ratingDAO.getRatingById(ratingid);
	}
	
	@PostMapping("addRating/{exerciseId}/{userId}")
    public Rating addRating(@PathVariable("exerciseId") Long exerciseId, @PathVariable("userId") Long userId , @RequestBody Rating rating) {
        return ratingDAO.addRating(exerciseId, userId, rating.getStars());
    }
	
	
}
