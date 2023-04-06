package com.example.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.Reaction;

@Repository
public interface ReactionRepository extends JpaRepository<Reaction, Long> {

}
