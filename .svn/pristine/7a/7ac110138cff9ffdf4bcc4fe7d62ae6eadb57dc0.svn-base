package com.sopra.banking.digital.agentbanking.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Agent Banking application main class. This class must be in the root package
 * as it'll scan child packages.
 * 
 * @author flepora
 */
@SpringBootApplication
@ComponentScan({ "com.sopra.banking.digital.agentbanking.web.security",
		"com.sopra.banking.digital.agentbanking.service", "com.sopra.banking.digital.agentbanking.web.config",
		"com.sopra.banking.digital.agentbanking.web.controller" })
@EnableJpaRepositories(basePackages = "com.sopra.banking.digital.agentbanking.data.dao")
@EntityScan(basePackages = "com.sopra.banking.digital.agentbanking.data.entity")
@PropertySources({ @PropertySource("classpath:/agent-banking.properties"),
		@PropertySource("classpath:agent-banking-data.properties") })

@ImportResource({ "classpath*:applicationContext.xml" })

public class AgentBankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgentBankingApplication.class, args);
	}

}
