package com.example.fitness.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.Product;
@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product> findAll(Pageable pageable);
	List<Product> findByNameContainingIgnoreCase(String key1 , Pageable pageable);
}
