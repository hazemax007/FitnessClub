package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.UserDAO;
import com.example.fitness.entity.User;
import com.example.fitness.repository.UserRepository;

@Service
public class UserService implements UserDAO {
	
	@Autowired
	UserRepository userR;
	
	@Override
	public User addUser(User u) {
		return userR.save(u);
	}

	@Override
	public User updateUser(User u , Long id) {
		User user = userR.findById(id).orElse(null);
		user.setUsername(u.getUsername());
		user.setEmail(u.getEmail());
		user.setPassword(u.getPassword());
		user.setFirstName(u.getFirstName());
		user.setLastName(u.getLastName());
		user.setBirthdate(u.getBirthdate());
		user.setPhoneNumber(u.getPhoneNumber());
		user.setAdresse(u.getAdresse());
		user.setUserImages(u.getUserImages());
		return userR.save(user);
	}

	@Override
	public void deleteUser(Long id) {
		userR.deleteById(id);

	}

	@Override
	public List<User> retrieveAllUsers() {
		return userR.findAll();
	}

	@Override
	public User getUserById(Long id) {
		return userR.findById(id).orElse(null);
	}

}
