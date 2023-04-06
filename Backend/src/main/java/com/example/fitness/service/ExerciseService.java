package com.example.fitness.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.ExerciseDAO;
import com.example.fitness.entity.Exercise;
import com.example.fitness.entity.Rating;
import com.example.fitness.entity.User;
import com.example.fitness.repository.ExerciseRepository;
import com.example.fitness.repository.RatingRepository;
import com.example.fitness.repository.UserRepository;
import com.example.fitness.security.jwt.AuthTokenFilter;

@Service
public class ExerciseService implements ExerciseDAO {
	@Autowired
	ExerciseRepository exerciseR;
	@Autowired
	private UserRepository ur;
	@Autowired
	private RatingRepository rr;

	@Override
	public Exercise addExercise(Exercise e) {
		// TODO Auto-generated method stub
		return exerciseR.save(e);
	}

	@Override
	public Exercise UpdateExercise(Exercise e, Long id) {
		Exercise ex = exerciseR.findById(id).orElse(null);
		ex.setName(e.getName());
		ex.setBodyPart(e.getBodyPart());
		ex.setLevel(e.getLevel());
		ex.setNbrSets(e.getNbrSets());
		ex.setNbrReps(e.getNbrReps());
		ex.setDescription(e.getDescription());
		ex.setAverage(e.getAverage());
		return exerciseR.save(ex);
	}

	@Override
	public void deleteExercise(Long id) {
		exerciseR.deleteById(id);

	}

	@Override
	public List<Exercise> retrieveAllExercise() {
		// TODO Auto-generated method stub
		return exerciseR.findAll();
	}

	@Override
	public Exercise getExerciseById(Long exerciseId) {
		// TODO Auto-generated method stub
		
		return exerciseR.findById(exerciseId).orElse(null);
	}

	@Override
	public Exercise getExerciseAndRatingById(Long exerciseId, Long ratingId) {
		Set<Rating> ratings = (Set<Rating>) rr.findAll();
		Exercise exercise = exerciseR.findById(exerciseId).orElse(null);
		exercise.setRating(ratings);
		return exercise;
	}
	
	


}
