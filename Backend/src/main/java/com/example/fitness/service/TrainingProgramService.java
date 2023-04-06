package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.TrainingProgramDAO;
import com.example.fitness.entity.TrainingProgram;
import com.example.fitness.repository.TrainingProgramRepository;

@Service
public class TrainingProgramService implements TrainingProgramDAO {
	
	@Autowired
	TrainingProgramRepository tpR;

	@Override
	public TrainingProgram addTrainingProgram(TrainingProgram tp) {
		// TODO Auto-generated method stub
		return tpR.save(tp);
	}

	@Override
	public TrainingProgram updateTrainingProgram(TrainingProgram tp, Long id) {
		TrainingProgram tpp = tpR.findById(id).orElse(null);
		tpp.setName(tp.getName());
		tpp.setType(tp.getType());
		tpp.setLevel(tp.getLevel());
		tpp.setDaysPerWeek(tp.getDaysPerWeek());
		tpp.setDescription(tp.getDescription());
		tpp.setVideoURL(tp.getVideoURL());
		tpp.setCoachCV(tp.getCoachCV());
		return tpR.save(tpp);
	}

	@Override
	public void deleteTrainingProgram(Long id) {
		// TODO Auto-generated method stub
		tpR.deleteById(id);

	}

	@Override
	public List<TrainingProgram> retrieveAllTrainingPrograms(int pageNumber , String searchKey) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, 3);
		if(searchKey.equals("")) {
			return  (List<TrainingProgram>) tpR.findAll(pageable);
		}else {
			return (List<TrainingProgram>) tpR.findByNameContainingIgnoreCase(searchKey, pageable);
		}
	}

	@Override
	public TrainingProgram getTrainingProgramById(Long id) {
		// TODO Auto-generated method stub
		return tpR.findById(id).orElse(null);
	}

}
