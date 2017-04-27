package com.sopra.banking.digital.agentbanking.data.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;

/**
 * 
 * @author relamrani
 *
 */
@Repository
public interface AgentRepository extends JpaRepository<AgentEntity, String> {

	@Query("select u from AgentEntity u where u.username = ?1")
	AgentEntity findOneByUsername(String username);

}