package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.ExerciseDAO;
import com.example.fitness.dao.RatingDAO;
import com.example.fitness.dao.UserDAO;
import com.example.fitness.entity.Exercise;
import com.example.fitness.entity.Rating;
import com.example.fitness.entity.User;
import com.example.fitness.repository.RatingRepository;

@Service
public class RatingService implements RatingDAO{
	
	@Autowired
    private RatingRepository ratingRepository;
	@Autowired
	private ExerciseDAO exerciseDAO;
	@Autowired
	private UserDAO userDAO;
    
	@Override
    public List<Rating> getRatingsByExerciceId(Long exerciseId) {
        return ratingRepository.findByExerciseId(exerciseId);
    }
    
	@Override
    public Rating addRating(Long exerciseId, Long userId, int stars) {
        Rating rating = ratingRepository.findByExerciseIdAndUserId(exerciseId, userId);
        if (rating != null) {
            rating.setStars(stars);
            return ratingRepository.save(rating);
        } else {
            Exercise exercise = exerciseDAO.getExerciseById(exerciseId);
            User user = userDAO.getUserById(userId);
            rating = new Rating();
            rating.setExercise(exercise);
            rating.setUser(user);
            rating.setStars(stars);
            return ratingRepository.save(rating);
        }
    }
	
	@Override
	public Rating getRatingByExerciseIdAndUserId(Long exerciseId, Long userId) {
        return ratingRepository.findByExerciseIdAndUserId(exerciseId, userId);
    }

	@Override
	public Rating getRatingById(Long ratingId) {
		return ratingRepository.findById(ratingId).orElse(null);
	}

	
}
