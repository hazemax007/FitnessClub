package com.example.fitness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fitness.entity.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {
	List<Rating> findByExerciseId(Long productId);
    
    Rating findByExerciseIdAndUserId(Long productId, Long userId);
}
