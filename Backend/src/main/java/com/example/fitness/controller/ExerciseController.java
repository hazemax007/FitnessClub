package com.example.fitness.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.dao.ExerciseDAO;
import com.example.fitness.dao.ImageDAO;
import com.example.fitness.entity.Exercise;
import com.example.fitness.entity.Image;

@RestController
@RequestMapping("/exercise")
@CrossOrigin("*")
public class ExerciseController {
	@Autowired
	ExerciseDAO exerciseD;
	
	@Autowired
	ImageDAO imageD;
	
	// http://localhost:8089/SpringMVC/exercise/retrieve-all-exercises
		@GetMapping("/retrieve-all-exercises")
		@ResponseBody
		private List<Exercise> retrieveAllExercises(){
			return exerciseD.retrieveAllExercise();
		}
		
		// http://localhost:8089/SpringMVC/exercise/add-exercise
		@PostMapping("/add-exercise")
		@ResponseBody
		private Exercise addExercise(@RequestPart("exercise") Exercise e , @RequestPart ("imageFile")MultipartFile[] file) {
			try {
				Set<Image> images = imageD.uploadImage(file);
				e.setExerciseImages(images);
				return exerciseD.addExercise(e);
			} catch (Exception ee) {
				System.out.println(ee.getMessage());
				return null;
			}
		}
		
		// http://localhost:8089/SpringMVC/exercise/update-exercise
		@PutMapping("/update-exercise/{exercise-id}")
		@ResponseBody
		private Exercise updateExercise(@RequestBody Exercise e , @PathVariable("exercise-id") Long id) {
			return exerciseD.UpdateExercise(e, id);
		}
		
		// http://localhost:8089/SpringMVC/exercise/delete-exercise
		@DeleteMapping("/delete-exercise/{exercise-id}")
		@ResponseBody
		private void deleteExercise(@PathVariable ("exercise-id") Long id) {
			exerciseD.deleteExercise(id);
		}
		
		// http://localhost:8089/SpringMVC/exercise/get-exercise-by-id/id
		@GetMapping("/get-exercise-by-id/{exercise-id}")
		@ResponseBody
		private Exercise getExerciseById(@PathVariable("exercise-id") Long id) {
			return exerciseD.getExerciseById(id);
		}
		
		// http://localhost:8089/SpringMVC/exercise/get-exercise-by-id/id
		@GetMapping("/get-exercise-and-rating-by-id/{exercise-id}/{rating-id}")
		@ResponseBody
		private Exercise getExerciseAndRatingById(@PathVariable("exercise-id") Long exerciseId,@PathVariable("rating-id") Long ratingId) {
			return exerciseD.getExerciseAndRatingById(exerciseId, ratingId);
		}
		
		
		
}
