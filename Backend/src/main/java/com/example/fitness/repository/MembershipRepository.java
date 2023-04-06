package com.example.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fitness.entity.Membership;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Long> {

}
