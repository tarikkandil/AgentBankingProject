package com.sopra.banking.digital.agentbanking.service.dto;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class Address {
	@Column(nullable = false)
	@Basic
	@NotNull(message = "street cannot be null")
	private String street;

	@Column(nullable = false)
	@Basic
	@NotNull(message = "pd box no cannot be null")
	private String pdboxNo;

	@Column(nullable = false)
	@Basic
	@NotNull(message = "country cannot be null")
	@Pattern(regexp = "[a-zA-Z]{2,}", message = "country name not valid")
	private String country;

	@Column(nullable = false)
	@Basic
	@NotNull(message = "city cannot be null")
	@Pattern(regexp = "^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$", message = "city name not valid")
	private String town;

	public String getCountry() {
		return this.country;
	}

	public String getPdboxNo() {
		return this.pdboxNo;
	}

	public String getStreet() {
		return this.street;
	}

	public String getTown() {
		return this.town;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setPdboxNo(String pdboxNo) {
		this.pdboxNo = pdboxNo;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public void setTown(String town) {
		this.town = town;
	}

}
