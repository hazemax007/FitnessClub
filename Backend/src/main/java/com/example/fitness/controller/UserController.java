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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.dao.UserDAO;
import com.example.fitness.entity.Image;
import com.example.fitness.entity.Product;
import com.example.fitness.entity.User;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserDAO userD;
	
	// http://localhost:8089/SpringMVC/user/retrieve-all-users
	@GetMapping("/retrieve-all-users")
	@ResponseBody
	private List<User> retrieveAllUsers(){
		return userD.retrieveAllUsers();
	}
	
	// http://localhost:8089/SpringMVC/user/add-user
	@PostMapping("/add-user")
	@ResponseBody
	private User addUser(@RequestBody User u) {
		return userD.addUser(u);
	}
	
	// http://localhost:8089/SpringMVC/user/update-user
		@PutMapping(value = {"/update-user/{user-id}"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
		@ResponseBody
		private User updateUser(@RequestPart("user") User u,@RequestPart ("imageFile")MultipartFile[] file,@PathVariable("user-id") Long id) {
			try {
				Set<Image> images = uploadImage(file);
				u.setUserImages(images);
				return userD.updateUser(u, id);
			}catch(Exception e) {
				System.out.println(e.getMessage());
				return null;
			}
		}
	
	// http://localhost:8089/SpringMVC/user/delete-user
	@DeleteMapping("/delete-user/{user-id}")
	@ResponseBody
	private void deleteUser(@PathVariable ("user-id") Long id) {
		userD.deleteUser(id);
	}
	
	// http://localhost:8089/SpringMVC/user/get-user-by-id/id
	@GetMapping("/get-user-by-id/{user-id}")
	@ResponseBody
	private User getUserById(@PathVariable("user-id") Long id) {
		return userD.getUserById(id);
	}
	
	public Set<Image> uploadImage(MultipartFile[] multipartFiles) throws IOException{
		Set<Image> images = new HashSet<>();
		for(MultipartFile file:multipartFiles) {
			Image image = new Image(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
			images.add(image);
		}
		return images;
	}
}
