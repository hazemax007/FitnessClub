package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Rating;

public interface RatingDAO {
	
	public List<Rating> getRatingsByExerciceId(Long exerciseId);
	public Rating addRating(Long productId, Long userId, int stars);
	public Rating getRatingByExerciseIdAndUserId(Long productId, Long userId);
	public Rating getRatingById(Long ratingId);
}
