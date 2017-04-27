package com.sopra.banking.digital.agentbanking.data.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.sopra.banking.digital.agentbanking.data.entity.CustomerEntity;

/**
 * 
 * @author relamrani
 *
 */
@Repository
public interface CustomerRepository
		extends JpaRepository<CustomerEntity, String>, PagingAndSortingRepository<CustomerEntity, String> {

	static final String QUERY = "SELECT c from CustomerEntity c where c.firstName like CONCAT(?1, '%') or c.lastName like CONCAT(?1, '%')";

	@Query(QUERY)
	List<CustomerEntity> findByLastNameOrFirstNameContaining(String query);

	@Query("SELECT c FROM CustomerEntity c, AgentEntity a where a.id = c.id and a.id = ?1")
	List<CustomerEntity> findCustomersByAgent(String id);
}