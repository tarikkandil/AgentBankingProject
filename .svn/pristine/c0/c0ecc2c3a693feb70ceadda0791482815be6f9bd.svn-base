package com.sopra.banking.digital.agentbanking.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Enables spring security for dev environment
 * 
 * @author flepora
 *
 */
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// http.authorizeRequests().anyRequest().fullyAuthenticated().and().formLogin();
		http.authorizeRequests().anyRequest().fullyAuthenticated().and().httpBasic();
		// http.authorizeRequests().anyRequest().anonymous();

		// Disable CSRF : do not forget to enable CSF protection for production
		// app !
		http.csrf().disable();
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("flepora").password("sopra").roles("USER");
		auth.inMemoryAuthentication().withUser("tkandil").password("sopra").roles("USER");
		auth.inMemoryAuthentication().withUser("relamrani").password("sopra").roles("USER");
	}

}
