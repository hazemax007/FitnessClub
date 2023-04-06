package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.FactureDAO;
import com.example.fitness.entity.Facture;
import com.example.fitness.repository.FactureRepository;

@Service
public class FactureService implements FactureDAO {
	@Autowired
	FactureRepository factureR;

	@Override
	public Facture addFacture(Facture f) {
		// TODO Auto-generated method stub
		return factureR.save(f);
	}

	@Override
	public Facture updateFacture(Facture f, Long id) {
		// TODO Auto-generated method stub
		Facture fac = factureR.findById(id).orElse(null);
		fac.setReference(f.getReference());
		fac.setOwner(f.getOwner());
		fac.setTotalNet(f.getTotalNet());
		fac.setTotalBrut(f.getTotalBrut());
		fac.setDescription(f.getDescription());
		return factureR.save(fac);
	}

	@Override
	public void deleteFacture(Long id) {
		// TODO Auto-generated method stub
		factureR.deleteById(id);

	}

	@Override
	public List<Facture> retrieveAllFactures() {
		// TODO Auto-generated method stub
		return factureR.findAll();
	}

}
