package com.example.fitness.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderInput {
	private Long id;
	private String fullName;
	private String fullAdresse;
	private String contactNumber;
	private String alternateContactNumber;
	private List<OrderProductQuantity> orderProductQuantityList;
}
