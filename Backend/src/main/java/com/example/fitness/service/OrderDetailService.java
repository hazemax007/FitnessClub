package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.OrderDetailDAO;
import com.example.fitness.entity.Cart;
import com.example.fitness.entity.OrderDetail;
import com.example.fitness.entity.OrderInput;
import com.example.fitness.entity.OrderProductQuantity;
import com.example.fitness.entity.Product;
import com.example.fitness.entity.User;
import com.example.fitness.repository.CartRepository;
import com.example.fitness.repository.OrderDetailRepository;
import com.example.fitness.repository.ProductRepository;
import com.example.fitness.repository.UserRepository;
import com.example.fitness.security.jwt.AuthTokenFilter;

@Service
public class OrderDetailService implements OrderDetailDAO{
	private static final String ORDER_PLACED = "Placed";
	@Autowired
	private OrderDetailRepository odr;
	@Autowired
	private ProductRepository pr;
	@Autowired
	private UserRepository ur;
	@Autowired
	private CartRepository cr;
	
	@Override
	public void placeOrder(boolean isSingleProductCheckout,OrderInput order) {
		// TODO Auto-generated method stub
		List<OrderProductQuantity> productQuantityList = order.getOrderProductQuantityList();
		for(OrderProductQuantity o:productQuantityList) {
			Product product = pr.findById(o.getProductId()).orElse(null);
			String currentUser = AuthTokenFilter.CURRENT_USER;
			User user = ur.findByUsername(currentUser).orElse(null);
			OrderDetail orderDetail = new OrderDetail(
					order.getFullName(),
					order.getFullAdresse(),
					order.getContactNumber(),
					order.getAlternateContactNumber(),
					ORDER_PLACED,
					product.getDiscount() * o.getQuantity(),
					product,
					user
					);
			if(!isSingleProductCheckout) {
				List<Cart> carts = cr.findByUser(user);
				carts.stream().forEach(x -> cr.deleteById(x.getId()));
			}
			odr.save(orderDetail);
		}
	}

}
