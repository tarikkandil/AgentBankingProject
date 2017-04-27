package com.sopra.banking.digital.agentbanking.service.contract;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.data.domain.Page;

import com.sopra.banking.digital.agentbanking.service.dto.Customer;

/**
 * Agent facade : provides standard methods to interact with Agent
 * 
 * @author relamrani
 *
 */
public interface CustomerService {

	/**
	 * Create new customer for given Agent
	 * 
	 * @return
	 */
	Customer createCustomer(@Valid @NotNull Customer customer, String id);

	/**
	 * Delete customer by given id
	 * 
	 * @param id
	 */
	void deleteCustomerById(String id);

	/**
	 * List all agent customers
	 * 
	 * @param id
	 * @return
	 */
	List<Customer> getAgentCustomers(String id);

	/**
	 * List all agent customers
	 * 
	 * @param page
	 * @param size
	 * @return
	 */
	Page<Customer> getAllCustomers(Integer page, Integer size);

	/**
	 * Find customer by given id
	 * 
	 * @param id
	 * @return
	 */
	Customer getCustomer(String id);

	/**
	 * List all agents
	 * 
	 * @return
	 */
	List<Customer> listCustomer();

	/**
	 * Search customer by given query
	 * 
	 * @param query
	 * @return
	 */
	List<Customer> searchCustomer(String query);

	/**
	 * Update given customer
	 * 
	 * @param customer
	 * @param id
	 * @return
	 */
	Customer updateCustomer(Customer customer, String id);
}
