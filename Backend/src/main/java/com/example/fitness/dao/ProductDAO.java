package com.example.fitness.dao;

import java.util.List;


import com.example.fitness.entity.Product;

public interface ProductDAO {
	Product addProduct(Product p);
	Product updateProduct(Product p,Long id);
	void deleteProduct(Long id);
	List<Product> retrieveAllProducts(int pageNumber , String searchKey); 
	Product getProductById(Long id);
	List<Product> getProductDetails(boolean isSingleProductCheckout , Long productId);
}
