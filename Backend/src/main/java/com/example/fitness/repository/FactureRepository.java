package com.example.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.Facture;

@Repository
public interface FactureRepository extends JpaRepository<Facture, Long> {

}
