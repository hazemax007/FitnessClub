package com.example.fitness.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String fullName;
	private String fullAdresse;
	private String contactNumber;
	private String alternateContactNumber;
	private String Status;
	private Double Amount;
	@OneToOne
	private Product product;
	@OneToOne
	private User user;
	
	public OrderDetail(String fullName, String fullAdresse, String contactNumber, String alternateContactNumber,
			String Status, Double Amount, Product product, User user) {
		super();
		this.fullName = fullName;
		this.fullAdresse = fullAdresse;
		this.contactNumber = contactNumber;
		this.alternateContactNumber = alternateContactNumber;
		this.Status = Status;
		this.Amount = Amount;
		this.product = product;
		this.user = user;
	}
	
	
	
	
}
