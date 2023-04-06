package com.example.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fitness.dao.UserDAO;
import com.example.fitness.entity.User;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/test")
public class TestController {
	@Autowired
	UserDAO userD;
	
  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }
  
  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('TRAINER') or hasRole('ADMIN') or hasRole('MEMBER') or hasRole('EMPLOYEE')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/trainer")
  @PreAuthorize("hasRole('TRAINER')")
  public String trainerAccess() {
    return "Trainer Board.";
  }
  
  @GetMapping("/member")
  @PreAuthorize("hasRole('MEMBER')")
  public String memberAccess() {
    return "Member Board.";
  }
  
  @GetMapping("/employee")
  @PreAuthorize("hasRole('EMPLOYEE')")
  public String employeeAccess() {
    return "Employee Board.";
  }
  
//http://localhost:8089/SpringMVC/user/update-user
	@PutMapping("/update-user/{user-id}")
	@ResponseBody
	private User updateUser(@RequestBody User u , @PathVariable("user-id") Long id) {
		return userD.updateUser(u, id);
	}
	
	// http://localhost:8089/SpringMVC/user/get-user-by-id/id
		@GetMapping("/get-user-by-id/{user-id}")
		@PreAuthorize("hasRole('USER') or hasRole('TRAINER') or hasRole('ADMIN') or hasRole('MEMBER') or hasRole('EMPLOYEE')") 
		@ResponseBody
		private User getUserById(@PathVariable("user-id") Long id) {
			return userD.getUserById(id);
		}

}
