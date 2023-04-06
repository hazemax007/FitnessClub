package com.example.fitness.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Rating {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private  Long id;
	@Min(1)
    @Max(5)
	private int stars;
	@ManyToOne
	private User user;
	@ManyToOne
	private Exercise exercise;
	
	public Rating(@Min(1) @Max(5) int stars, User user, Exercise exercise) {
		super();
		this.stars = stars;
		this.user = user;
		this.exercise = exercise;
	}
	
	
	
	
}
