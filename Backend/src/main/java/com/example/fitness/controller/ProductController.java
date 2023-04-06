package com.example.fitness.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.dao.ImageDAO;
import com.example.fitness.dao.ProductDAO;
import com.example.fitness.entity.Image;
import com.example.fitness.entity.Product;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
	@Autowired
	ProductDAO productD;
	@Autowired
	ImageDAO imageD;
	
	// http://localhost:8089/SpringMVC/product/retrieve-all-products
		@GetMapping("/retrieve-all-products")
		@ResponseBody
		private List<Product> retrieveAllProducts(@RequestParam(defaultValue = "0") int pagenumber, @RequestParam(defaultValue = "") String searchKey){
			List<Product> result =  productD.retrieveAllProducts(pagenumber , searchKey);
			System.out.println("result size is "+result.size());
			return  result;
		}
		
		// http://localhost:8089/SpringMVC/product/add-product
		@PostMapping(value = {"/add-product"} , consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
		@ResponseBody
		private Product addProduct(@RequestPart("product") Product p,@RequestPart ("imageFile")MultipartFile[] file) {
			try {
				Set<Image> images = imageD.uploadImage(file);
				p.setProductImages(images);
				return productD.addProduct(p);
			} catch (Exception e) {
				System.out.println(e.getMessage());
				return null;
			}
		}
		
		// http://localhost:8089/SpringMVC/product/update-product
		@PutMapping("/update-product/{product-id}")
		@ResponseBody
		private Product updateProduct(@RequestBody Product p , @PathVariable("product-id") Long id) {
			return productD.updateProduct(p, id);
		}
		
		// http://localhost:8089/SpringMVC/product/delete-product
		@DeleteMapping("/delete-product/{product-id}")
		@ResponseBody
		private void deleteProduct(@PathVariable ("product-id") Long id) {
			productD.deleteProduct(id);
		}
		
		// http://localhost:8089/SpringMVC/product/get-product-by-id/id
		@GetMapping("/get-product-by-id/{product-id}")
		@ResponseBody
		private Product getProductById(@PathVariable("product-id") Long id) {
			return productD.getProductById(id);
		}
		
		public Set<Image> uploadImage(MultipartFile[] multipartFiles) throws IOException{
			Set<Image> images = new HashSet<>();
			for(MultipartFile file:multipartFiles) {
				Image image = new Image(
						file.getOriginalFilename(),
						file.getContentType(),
						file.getBytes()
						);
				images.add(image);
			}
			return images;
		}
		
		
		@GetMapping("/getProductDetails/{isSingleProductCheckout}/{productId}")
		public List<Product> getProductDetails(@PathVariable("isSingleProductCheckout") boolean isSingleProductCheckout , @PathVariable("productId") Long productId) {
			return productD.getProductDetails(isSingleProductCheckout, productId);
		}
		
}
