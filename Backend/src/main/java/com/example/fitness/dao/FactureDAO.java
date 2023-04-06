package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Facture;

public interface FactureDAO {
	Facture addFacture(Facture f);
	Facture updateFacture(Facture f,Long id);
	void deleteFacture(Long id);
	List<Facture> retrieveAllFactures();
}
