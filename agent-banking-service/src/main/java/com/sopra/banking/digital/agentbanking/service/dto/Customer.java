package com.sopra.banking.digital.agentbanking.service.dto;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.NotBlank;

public class Customer {

	private Address address;
	/**
	 * city of customer birthday
	 */
	@NotNull(message = "city of birth is compulsory")
	@Enumerated(EnumType.STRING)
	private City cityOfBirth;

	/**
	 * country of customer birthday
	 */
	@NotNull(message = "country of birth is compulsory")
	@Enumerated(EnumType.STRING)
	private Country countryOfBirth;

	/**
	 * birthday date of customer
	 */
	@Past(message = "Date of Birth must be the past")
	@NotNull(message = "Date of Birth is compulsory")
	private Date dateOfBirth;

	/**
	 * firstname of customer
	 */
	@NotNull(message = "customer firstname  cannot be null")
	@NotBlank(message = "First name is compulsory")
	@Pattern(regexp = "[a-z-A-Z]*", message = "First name has invalid characters")
	private String firstName;

	/**
	 * gender of customer
	 */
	@NotNull(message = "gender is compulsory")
	@Enumerated(EnumType.STRING)
	private Gender gender;

	private String id;

	/**
	 * 
	 */
	@NotNull(message = "identity doc id is compulsory")
	private Integer identityDocId;

	/**
	 * 
	 */
	@NotNull(message = "identity doc type is compulsory")
	@Enumerated(EnumType.STRING)
	private DocType identityDocType;

	/**
	 * Language of customer
	 */
	@NotNull(message = "language is compulsory")
	@Enumerated(EnumType.STRING)
	private Language language;

	/**
	 * lastname of customer
	 */
	@NotNull(message = "Last name is compulsory")
	@NotBlank(message = "Last name is compulsory")
	@Pattern(regexp = "[a-z-A-Z]*", message = "Last name has invalid characters")
	private String lastName;

	/**
	 * nationality of customer
	 */
	@NotNull(message = "nationality is compulsory")
	@Enumerated(EnumType.STRING)
	private Country nationality;

	/**
	 * Customer phone number
	 */
	@NotNull(message = "phone number is compulsory")
	@NotBlank(message = "phone number is compulsory")
	private String phoneNumber;

	/**
	 * Customer phonee type
	 */
	@NotNull(message = "phone type is compulsory")
	@Enumerated(EnumType.STRING)
	private PhoneType phoneType;

	/**
	 * record id of customer
	 */
	// @NotNull(message = "customer record id cannot be null")
	private Integer recordId;

	/**
	 * residence of customer
	 */
	@NotNull(message = "residence is compulsory")
	@Enumerated(EnumType.STRING)
	private Country residence;

	/**
	 * title for customer
	 */
	@Enumerated(EnumType.STRING)
	private Title title;

	/**
	 * constructor for jpa
	 */
	public Customer() {

	}

	/**
	 * Constructor using params
	 * 
	 * @param recordId
	 * @param title
	 * @param firstName
	 * @param lastName
	 * @param dateOfBirth
	 * @param countryOfBirth
	 * @param cityOfBirth
	 * @param gender
	 * @param nationality
	 * @param residence
	 * @param language
	 * @param phoneNumber
	 * @param addressEntity
	 * @param account
	 */
	public Customer(Integer recordId, Title title, String firstName, String lastName, Date dateOfBirth,
			Country countryOfBirth, City cityOfBirth, Gender gender, Country nationality, Country residence,
			Language language, String phoneNumber) {
		super();
		this.recordId = recordId;
		this.title = title;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.countryOfBirth = countryOfBirth;
		this.cityOfBirth = cityOfBirth;
		this.gender = gender;
		this.nationality = nationality;
		this.residence = residence;
		this.language = language;
		this.phoneNumber = phoneNumber;
	}

	public Address getAddress() {
		return address;
	}

	public City getCityOfBirth() {
		return this.cityOfBirth;
	}

	public Country getCountryOfBirth() {
		return this.countryOfBirth;
	}

	public Date getDateOfBirth() {
		return this.dateOfBirth;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public Gender getGender() {
		return this.gender;
	}

	public String getId() {
		return id;
	}

	public Integer getIdentityDocId() {
		return identityDocId;
	}

	public DocType getIdentityDocType() {
		return identityDocType;
	}

	public Language getLanguage() {
		return this.language;
	}

	public String getLastName() {
		return this.lastName;
	}

	public Country getNationality() {
		return this.nationality;
	}

	public String getPhoneNumber() {
		return this.phoneNumber;
	}

	public PhoneType getPhoneType() {
		return phoneType;
	}

	public Integer getRecordId() {
		return this.recordId;
	}

	public Country getResidence() {
		return this.residence;
	}

	public Title getTitle() {
		return this.title;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public void setCityOfBirth(City cityOfBirth) {
		this.cityOfBirth = cityOfBirth;
	}

	public void setCountryOfBirth(Country countryOfBirth) {
		this.countryOfBirth = countryOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setIdentityDocId(Integer identityDocId) {
		this.identityDocId = identityDocId;
	}

	public void setIdentityDocType(DocType identityDocType) {
		this.identityDocType = identityDocType;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setNationality(Country nationality) {
		this.nationality = nationality;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setPhoneType(PhoneType phoneType) {
		this.phoneType = phoneType;
	}

	public void setRecordId(Integer recordId) {
		this.recordId = recordId;
	}

	public void setResidence(Country residence) {
		this.residence = residence;
	}

	public void setTitle(Title title) {
		this.title = title;
	}
}
