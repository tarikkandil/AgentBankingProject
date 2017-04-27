package com.sopra.banking.digital.agentbanking.service.contract;

import java.util.List;

import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;
import com.sopra.banking.digital.agentbanking.service.dto.Agent;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;

/**
 * Agent facade : provides standard methods to interact with Agent
 * 
 * @author relamrani
 *
 */
public interface AgentService {

	/**
	 * Find agent By username
	 * 
	 * @return
	 */
	AgentEntity agentByUsername(String username);

	/**
	 * Create new agent
	 * 
	 * @param agent
	 * @return agent
	 */
	Agent createAgent(Agent agent);

	Agent getAgent(String id);

	/**
	 * List all agent customers
	 * 
	 * @param id
	 * @return
	 */
	List<Customer> getAgentCustomers(String id);

	/**
	 * List all agents
	 * 
	 * @return
	 */
	List<Agent> listAgent();
}
