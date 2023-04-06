package com.example.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	
}
