package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.CartDAO;
import com.example.fitness.entity.Cart;
import com.example.fitness.entity.Product;
import com.example.fitness.entity.User;
import com.example.fitness.repository.CartRepository;
import com.example.fitness.repository.ProductRepository;
import com.example.fitness.repository.UserRepository;
import com.example.fitness.security.jwt.AuthTokenFilter;

@Service
public class CartService implements CartDAO{
	
	@Autowired
	private CartRepository cr;
	@Autowired
	private ProductRepository pr;
	@Autowired
	private UserRepository ur;

	@Override
	public Cart addToCart(Long productId) {
		// TODO Auto-generated method stub
		Product product = pr.findById(productId).orElse(null);
		String username = AuthTokenFilter.CURRENT_USER;
		User user = null;
		if(username != null) {
		 user = ur.findByUsername(username).orElse(null);
		}
		if(product != null && user != null) {
			Cart cart = new Cart (product,user);
			return cr.save(cart);
		}
		return null;
	}

	@Override
	public List<Cart> getCartDetails() {
		// TODO Auto-generated method stub
		String username = AuthTokenFilter.CURRENT_USER;
		User user = ur.findByUsername(username).get();
		return cr.findByUser(user);
	}
	
}
