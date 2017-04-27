package com.sopra.banking.digital.agentbanking.service.exception;

public class AgentAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public AgentAlreadyExistException(final String message) {
		super(message);
	}
}
