package com.sopra.banking.digital.agentbanking.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.sopra.banking.digital.agentbanking.data.dao.AgentRepository;
import com.sopra.banking.digital.agentbanking.data.dao.CustomerRepository;
import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;
import com.sopra.banking.digital.agentbanking.data.entity.CustomerEntity;
import com.sopra.banking.digital.agentbanking.service.contract.CustomerService;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;
import com.sopra.banking.digital.agentbanking.service.exception.AgentAlreadyExistException;
import com.sopra.banking.digital.agentbanking.service.mapper.CustomerMapper;

/**
 * Default Agent facade implementation
 * 
 * @author relamrani
 *
 */
@Service
@Validated
public class CustomerServiceImpl implements CustomerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CustomerServiceImpl.class);

	@Autowired
	private CustomerRepository repository;

	@Autowired
	private AgentRepository agentRepository;

	@Override
	@Transactional
	public Customer createCustomer(final Customer customer, String id) {

		AgentEntity agent = agentRepository.findOne(id);
		if (agent == null) {
			throw new AgentAlreadyExistException(String.format("There not exists a agent with id=%s", id));
		}

		CustomerEntity customerEntity = customerToEntity(customer);
		customerEntity.setAgent(agent);
		return customerToDto(repository.save(customerEntity));
	}

	/**
	 * Return Customer Entity from given Customer DTO
	 * 
	 * @param entity
	 * @return
	 */
	private List<Customer> customersToDTO(List<CustomerEntity> entities) {
		return CustomerMapper.INSTANCE.toCustomerDTOs(entities);
	}

	/**
	 * Return Customer Dto from given Customer entity
	 * 
	 * @param entity
	 * @return
	 */
	private Customer customerToDto(CustomerEntity entity) {

		return CustomerMapper.INSTANCE.toDto(entity);
	}

	/**
	 * Return Customer Entity from given Customer DTO
	 * 
	 * @param entity
	 * @return
	 */
	private CustomerEntity customerToEntity(Customer entity) {

		return CustomerMapper.INSTANCE.toEntity(entity);
	}

	@Override
	@Transactional
	public void deleteCustomerById(String id) {

		repository.delete(id);
	}

	@Override
	public List<Customer> getAgentCustomers(String id) {

		return customersToDTO(repository.findCustomersByAgent(id));
	}

	@Override
	public Page<Customer> getAllCustomers(Integer page, Integer size) {
		Page pageOfCustomers = repository.findAll(new PageRequest(page, size));

		return pageOfCustomers;
	}

	@Override
	public Customer getCustomer(String id) {

		return customerToDto(repository.findOne(id));
	}

	@Override
	public List<Customer> listCustomer() {

		return customersToDTO(repository.findAll());
	}

	@Override
	public List<Customer> searchCustomer(String query) {

		return customersToDTO(repository.findByLastNameOrFirstNameContaining(query));
	}

	@Override
	public Customer updateCustomer(Customer customer, String id) {
		CustomerEntity currentcustomer = repository.findOne(id);
		if (currentcustomer == null) {

			throw new AgentAlreadyExistException(
					String.format("Unable to update. Customer with  id=%s not found.", id));
		}
		currentcustomer.copy(customerToEntity(customer));

		return customerToDto(repository.save(currentcustomer));
	}

}
