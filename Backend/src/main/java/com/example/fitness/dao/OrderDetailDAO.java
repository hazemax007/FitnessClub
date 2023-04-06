package com.example.fitness.dao;

import com.example.fitness.entity.OrderInput;

public interface OrderDetailDAO {
	public void placeOrder(boolean isSingleProductCheckout,OrderInput order);
}
