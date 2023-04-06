package com.example.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fitness.dao.OrderDetailDAO;
import com.example.fitness.entity.OrderInput;

@RestController
@RequestMapping("/orderDetail")
@CrossOrigin("*")
public class OrderDetailController {

	@Autowired
	private OrderDetailDAO odd;
	
	@PostMapping("/placeOrder/{isSingleProductCheckout}")
	public void placeOrder(@PathVariable("isSingleProductCheckout") boolean isSingleProductCheckout , @RequestBody OrderInput order) {
		odd.placeOrder(isSingleProductCheckout,order);
	}
}
