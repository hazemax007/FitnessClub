package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.User;

public interface UserDAO {
	User addUser(User u);
	User updateUser(User u , Long id);
	void deleteUser(Long id);
	List<User> retrieveAllUsers();
	User getUserById(Long id);
}
