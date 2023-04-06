package com.example.fitness.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.MembershipDAO;
import com.example.fitness.entity.Membership;
import com.example.fitness.repository.MembershipRepository;

@Service
public class MembershipService implements MembershipDAO {
	
	@Autowired
	MembershipRepository mR;

	@Override
	public Membership addMembership(Membership m) {
		// TODO Auto-generated method stub
		return mR.save(m);
	}

	@Override
	public Membership updateMembership(Membership m, Long id) {
		Membership mm = mR.findById(id).orElse(null);
		mm.setType(m.getType());
		mm.setPrice(m.getPrice());
		mm.setDuration(m.getDuration());
		mm.setOptions(m.getOptions());
		return mR.save(mm);
	}

	@Override
	public void deleteMembership(Long id) {
		// TODO Auto-generated method stub
		mR.deleteById(id);
	}

	@Override
	public List<Membership> retrieveAllMemberships() {
		// TODO Auto-generated method stub
		return mR.findAll();
	}

	@Override
	public Membership getMembershipById(Long id) {
		// TODO Auto-generated method stub
		return mR.findById(id).orElse(null);
	}

}
