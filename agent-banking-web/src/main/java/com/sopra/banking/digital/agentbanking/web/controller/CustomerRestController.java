package com.sopra.banking.digital.agentbanking.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.banking.digital.agentbanking.service.contract.CustomerService;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;

/**
 * Rest controller for the agent
 * 
 * @author relamrani
 *
 */
@RestController
@RequestMapping(value = "${agent.banking.api.url}")
public class CustomerRestController extends AbstractRestHandler {

	@Autowired
	private final CustomerService service = null;

	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/customer", method = RequestMethod.POST)
	public void createCustomer(@RequestBody @Valid final Customer customer, @RequestParam("agent-id") String id,
			HttpServletRequest request, HttpServletResponse response) {
		Customer createdCustomer = this.service.createCustomer(customer, id);
		response.setHeader("Location", request.getRequestURL().append("/").append(createdCustomer.getId()).toString());
	}

	@RequestMapping(value = "/customer/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCustomer(@PathVariable("id") String id, HttpServletRequest request,
			HttpServletResponse response) {
		checkResourceFound(this.service.getCustomer(id));

		this.service.deleteCustomerById(id);
	}

	@RequestMapping(value = "/customers/{id}", method = RequestMethod.GET)
	public List<Customer> getCustomerByAgentId(@PathVariable("id") String id) {
		return service.getAgentCustomers(id);
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/customer/{id}", method = RequestMethod.GET)
	public @ResponseBody Customer getCustomerEntityByAgentId(@PathVariable("id") String id, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		Customer customer = this.service.getCustomer(id);
		checkResourceFound(customer);

		return customer;
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/customers/list", method = RequestMethod.GET)
	public @ResponseBody Page<Customer> listAgents(
			@RequestParam(value = "page", required = true, defaultValue = DEFAULT_PAGE_NUM) Integer page,
			@RequestParam(value = "size", required = true, defaultValue = DEFAULT_PAGE_SIZE) Integer size,
			HttpServletRequest request, HttpServletResponse response) {

		return this.service.getAllCustomers(page, size);
	}

	@RequestMapping(value = "/customer/search/{query}", method = RequestMethod.GET)
	public List<Customer> searchCustomer(@PathVariable("query") String query) {
		return service.searchCustomer(query);
	}

	@RequestMapping(value = "/customer/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void updateUser(@PathVariable("id") String id, @RequestBody Customer customer, HttpServletRequest request,
			HttpServletResponse response) {

		service.updateCustomer(customer, id);
	}
}
