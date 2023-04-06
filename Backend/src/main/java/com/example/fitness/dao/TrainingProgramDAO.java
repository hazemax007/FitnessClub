package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.TrainingProgram;

public interface TrainingProgramDAO {
	TrainingProgram addTrainingProgram(TrainingProgram tp);
	TrainingProgram updateTrainingProgram(TrainingProgram tp,Long id);
	void deleteTrainingProgram(Long id);
	List<TrainingProgram> retrieveAllTrainingPrograms(int pageNumber , String searchKey);
	TrainingProgram getTrainingProgramById(Long id);
}
