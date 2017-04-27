package com.sopra.banking.digital.agentbanking.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.banking.digital.agentbanking.service.contract.AgentService;
import com.sopra.banking.digital.agentbanking.service.dto.Agent;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;

/**
 * Rest controller for the agent
 * 
 * @author relamrani
 *
 */
@RestController
@RequestMapping(value = "${agent.banking.api.url}")
public class AgentRestController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AgentRestController.class);

	@Autowired
	private final AgentService service = null;

	@RequestMapping(value = "/agent/create", method = RequestMethod.POST)
	public Agent createAgent(@RequestBody @Valid final Agent agent) {
		LOGGER.debug("Received request to create the {}", agent);
		return service.createAgent(agent);
	}

	@RequestMapping(value = "/agent/{id}", method = RequestMethod.GET, produces = "application/json")
	public Agent getAgent(@PathVariable String id) {
		return service.getAgent(id);
	}

	@RequestMapping(value = "/agent/customers/{id}", method = RequestMethod.GET)
	public List<Customer> getCustomerByAgentId(@PathVariable("id") String id) {
		return service.getAgentCustomers(id);
	}

	@RequestMapping(value = "/agents/list", method = RequestMethod.GET)
	public List<Agent> listAgents() {
		LOGGER.debug("Received request to list all users");
		return service.listAgent();
	}
}
