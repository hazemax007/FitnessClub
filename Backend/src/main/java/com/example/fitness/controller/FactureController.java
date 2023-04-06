package com.example.fitness.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.fitness.dao.FactureDAO;
import com.example.fitness.entity.Facture;

@RestController
@RequestMapping("/facture")
@CrossOrigin("*")
public class FactureController {
	@Autowired
	FactureDAO factureD;
	
	// http://localhost:8089/SpringMVC/facture/retrieve-all-factures
			@GetMapping("/retrieve-all-factures")
			@ResponseBody
			private List<Facture> retrieveAllFactures(){
				return factureD.retrieveAllFactures();
			}
			
			// http://localhost:8089/SpringMVC/facture/add-facture
			@PostMapping("/add-facture")
			@ResponseBody
			private Facture addFacture(@RequestBody Facture f) {
				return factureD.addFacture(f);
			}
			
			// http://localhost:8089/SpringMVC/facture/update-facture
			@PutMapping("/update-facture/{facture-id}")
			@ResponseBody
			private Facture updateFacture(@RequestBody Facture f , @PathVariable("facture-id") Long id) {
				return factureD.updateFacture(f, id);
			}
			
			// http://localhost:8089/SpringMVC/facture/delete-facture
			@DeleteMapping("/delete-facture/{facture-id}")
			@ResponseBody
			private void deleteFacture(@PathVariable ("facture-id") Long id) {
				factureD.deleteFacture(id);
			}
}
