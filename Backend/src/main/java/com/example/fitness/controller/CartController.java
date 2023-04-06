package com.example.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fitness.dao.CartDAO;
import com.example.fitness.entity.Cart;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {
	
	@Autowired
	private CartDAO cd;
	
	@GetMapping("/addToCart/{productId}")
	public void addToCart(@PathVariable("productId") Long productId) {
		cd.addToCart(productId);
	}
	
	@GetMapping("/getCartDetails")
	public List<Cart> getCartDetails() {
		return cd.getCartDetails();
	}

}
