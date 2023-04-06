package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Exercise;
import com.example.fitness.entity.Membership;

public interface MembershipDAO {
	Membership addMembership(Membership m);
	Membership updateMembership(Membership m,Long id);
	void deleteMembership(Long id);
	List<Membership> retrieveAllMemberships();
	Membership getMembershipById(Long id);
}
