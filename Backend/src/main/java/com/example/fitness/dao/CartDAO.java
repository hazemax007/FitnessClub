package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Cart;

public interface CartDAO {
	
	public Cart addToCart(Long productId);
	public List<Cart> getCartDetails();
}
