package com.example.fitness.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.ProductDAO;
import com.example.fitness.entity.Cart;
import com.example.fitness.entity.Product;
import com.example.fitness.entity.User;
import com.example.fitness.repository.CartRepository;
import com.example.fitness.repository.ProductRepository;
import com.example.fitness.repository.UserRepository;
import com.example.fitness.security.jwt.AuthTokenFilter;

@Service
public class ProductService implements ProductDAO {
	
	@Autowired
	ProductRepository productR;
	@Autowired
	private UserRepository ur;
	@Autowired
	private CartRepository cr;
	
	@Override
	public Product addProduct(Product p) {
		// TODO Auto-generated method stub
		return productR.save(p);
	}

	@Override
	public Product updateProduct(Product p, Long id) {
		Product pp = productR.findById(id).orElse(null);
		pp.setName(p.getName());
		pp.setType(p.getType());
		pp.setPrice(p.getPrice());
		pp.setDiscount(p.getDiscount());
		pp.setDescription(p.getDescription());
		return productR.save(pp);
	}

	@Override
	public void deleteProduct(Long id) {
		// TODO Auto-generated method stub
		productR.deleteById(id);
	}

	@Override
	public List<Product> retrieveAllProducts(int pageNumber , String searchKey) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, 3);
		if(searchKey.equals("")) {
			return (List<Product>) productR.findAll(pageable);
		}else {
			return (List<Product>) productR.findByNameContainingIgnoreCase(searchKey, pageable);
		}
	}

	@Override
	public Product getProductById(Long id) {
		// TODO Auto-generated method stub
		return productR.findById(id).orElse(null);
	}

	@Override
	public List<Product> getProductDetails(boolean isSingleProductCheckout, Long productId) {
		// TODO Auto-generated method stub
		if(isSingleProductCheckout && productId!=0) {
			//we are going to buy a single product
			List<Product> list = new ArrayList<>();
			Product product = productR.findById(productId).orElse(null);
			list.add(product);
			return list;
		}else {
			// we are going to buy mutiple products (cart functionality)
			String currentUser = AuthTokenFilter.CURRENT_USER;
			User user = ur.findByUsername(currentUser).orElse(null);
			List<Cart> carts = cr.findByUser(user);
			return carts.stream().map(x -> x.getProduct()).collect(Collectors.toList());
			
		}
		
	}

}
