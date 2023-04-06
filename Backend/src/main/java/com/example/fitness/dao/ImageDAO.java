package com.example.fitness.dao;

import java.io.IOException;
import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.entity.Image;

public interface ImageDAO {
	
	public Set<Image> uploadImage(MultipartFile[] multipartFiles) throws IOException;
}
