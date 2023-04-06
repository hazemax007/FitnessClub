package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Exercise;

public interface ExerciseDAO {
	Exercise addExercise(Exercise e);
	Exercise UpdateExercise(Exercise e,Long id);
	void deleteExercise(Long id);
	List<Exercise> retrieveAllExercise();
	Exercise getExerciseById(Long exerciceId);
	Exercise getExerciseAndRatingById(Long exerciseId,Long ratingId);
}
