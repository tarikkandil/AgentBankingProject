package com.sopra.banking.digital.agentbanking.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;

import com.sopra.banking.digital.agentbanking.web.exception.ResourceNotFoundException;

/**
 * This class is meant to be extended by all REST resource "controllers". It
 * contains exception mapping and other common REST API functionality
 */
// @ControllerAdvice?
public abstract class AbstractRestHandler implements ApplicationEventPublisherAware {

	protected static final String DEFAULT_PAGE_SIZE = "100";
	protected static final String DEFAULT_PAGE_NUM = "0";

	// todo: replace with exception mapping
	public static <T> T checkResourceFound(final T resource) {
		if (resource == null) {
			throw new ResourceNotFoundException("resource not found");
		}
		return resource;
	}

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	protected ApplicationEventPublisher eventPublisher;

	@Override
	public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
		this.eventPublisher = applicationEventPublisher;
	}

}