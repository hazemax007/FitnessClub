package com.example.fitness.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.TrainingProgram;

@Repository
public interface TrainingProgramRepository extends CrudRepository<TrainingProgram, Long> {
	List<TrainingProgram> findAll(Pageable pageable);
	List<TrainingProgram> findByNameContainingIgnoreCase(String key1 , Pageable pageable);
}
