package com.example.fitness.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.dao.ImageDAO;
import com.example.fitness.dao.TrainingProgramDAO;
import com.example.fitness.entity.Image;
import com.example.fitness.entity.TrainingProgram;

@RestController
@RequestMapping("/trainingProgram")
@CrossOrigin("*")
public class TrainingProgramController {
	@Autowired
	TrainingProgramDAO trainingProgramD;
	@Autowired
	ImageDAO imageD;
	
	// http://localhost:8089/SpringMVC/trainingProgram/retrieve-all-training-programs
		@GetMapping("/retrieve-all-training-programs")
		@ResponseBody
		private List<TrainingProgram> retrieveAllTrainingPrograms(@RequestParam(defaultValue = "0") int pagenumber, @RequestParam(defaultValue = "") String searchKey){
			List<TrainingProgram> result =  trainingProgramD.retrieveAllTrainingPrograms(pagenumber , searchKey);
			System.out.println("result size is "+result.size());
			return  result;
		}
		
		// http://localhost:8089/SpringMVC/trainingProgram/add-training-program
		@PostMapping(value = {"/add-training-program"} , consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
		@ResponseBody
		private TrainingProgram addTrainingProgram(@RequestPart("trainingProgram") TrainingProgram t,@RequestPart ("imageFile")MultipartFile[] file) {
			try {
				Set<Image> images = imageD.uploadImage(file);
				t.setCoachPictures(images);
				return trainingProgramD.addTrainingProgram(t);
			} catch (Exception e) {
				System.out.println(e.getMessage());
				return null;
			}
		}
		
		// http://localhost:8089/SpringMVC/trainingProgram/update-training-program
		@PutMapping("/update-training-program/{training-program-id}")
		@ResponseBody
		private TrainingProgram updateTrainingProgram(@RequestBody TrainingProgram tp , @PathVariable("training-program-id") Long id) {
			return trainingProgramD.updateTrainingProgram(tp, id);
		}
		
		// http://localhost:8089/SpringMVC/trainingProgram/delete-training-program
		@DeleteMapping("/delete-training-program/{training-program-id}")
		@ResponseBody
		private void deleteTrainingProgram(@PathVariable ("training-program-id") Long id) {
			trainingProgramD.deleteTrainingProgram(id);
		}
		
		// http://localhost:8089/SpringMVC/trainingProgram/get-trainingProgram-by-id/id
		@GetMapping("/get-trainingProgram-by-id/{trainingProgram-id}")
		@ResponseBody
		private TrainingProgram getTrainingProgramById(@PathVariable("trainingProgram-id") Long id) {
			return trainingProgramD.getTrainingProgramById(id);
		}
		
		
}
