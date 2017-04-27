package com.sopra.banking.digital.agentbanking.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.sopra.banking.digital.agentbanking.data.dao.AgentRepository;
import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;
import com.sopra.banking.digital.agentbanking.service.contract.AgentService;
import com.sopra.banking.digital.agentbanking.service.dto.Agent;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;
import com.sopra.banking.digital.agentbanking.service.exception.AgentAlreadyExistException;
import com.sopra.banking.digital.agentbanking.service.mapper.AgentMapper;
import com.sopra.banking.digital.agentbanking.service.mapper.CustomerMapper;

/**
 * Default Agent facade implementation
 * 
 * @author relamrani
 *
 */
@Service
@Validated
public class AgentServiceImpl implements AgentService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AgentServiceImpl.class);

	@Autowired
	private AgentRepository repository;

	@Override
	@Transactional
	public AgentEntity agentByUsername(String username) {
		AgentEntity agent = repository.findOneByUsername(username);
		return agent;
	}

	@Override
	@Transactional
	public Agent createAgent(final Agent agent) {
		LOGGER.debug("Creating {}", agent);
		AgentEntity entity = AgentMapper.INSTANCE.toEntity(agent);
		AgentEntity existing = repository.findOneByUsername(agent.getUsername());
		if (existing != null) {
			throw new AgentAlreadyExistException(
					String.format("There already exists a user with username=%s", entity.getUsername()));
		}

		return AgentMapper.INSTANCE.toDto(repository.save(entity));
	}

	@Override
	@Transactional
	public Agent getAgent(String id) {
		return AgentMapper.INSTANCE.toDto(repository.findOne(id));
	}

	@Override
	@Transactional
	public List<Customer> getAgentCustomers(String id) {

		AgentEntity agent = repository.findOne(id);
		return CustomerMapper.INSTANCE.toCustomerDTOs(agent.getCustomers());
	}

	@Override
	public List<Agent> listAgent() {
		LOGGER.debug("find all agents");

		return AgentMapper.INSTANCE.toAgentDTOs(repository.findAll());
	}

}
