package com.example.fitness.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fitness.entity.Cart;
import com.example.fitness.entity.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
	public List<Cart> findByUser(User user);

}
