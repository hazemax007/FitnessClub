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

import com.example.fitness.dao.MembershipDAO;
import com.example.fitness.entity.Membership;

@RestController
@RequestMapping("/membership")
@CrossOrigin("*")
public class MembershipController {
	@Autowired
	MembershipDAO membershipD;
	
	// http://localhost:8089/SpringMVC/membership/retrieve-all-memberships
			@GetMapping("/retrieve-all-memberships")
			@ResponseBody
			private List<Membership> retrieveAllMembership(){
				return membershipD.retrieveAllMemberships();
			}
			
			// http://localhost:8089/SpringMVC/membership/add-membership
			@PostMapping("/add-membership")
			@ResponseBody
			private Membership addMembership(@RequestBody Membership m) {
				return membershipD.addMembership(m);
			}
			
			// http://localhost:8089/SpringMVC/membership/update-membership
			@PutMapping("/update-membership/{membership-id}")
			@ResponseBody
			private Membership updateMembership(@RequestBody Membership m , @PathVariable("membership-id") Long id) {
				return membershipD.updateMembership(m, id);
			}
			
			// http://localhost:8089/SpringMVC/membership/delete-membership
			@DeleteMapping("/delete-membership/{membership-id}")
			@ResponseBody
			private void deleteMembership(@PathVariable ("membership-id") Long id) {
				membershipD.deleteMembership(id);
			}
			
			// http://localhost:8089/SpringMVC/membership/get-membership-by-id/id
			@GetMapping("/get-membership-by-id/{membership-id}")
			@ResponseBody
			private Membership getMembershipById(@PathVariable("membership-id") Long id) {
				return membershipD.getMembershipById(id);
			}
}
