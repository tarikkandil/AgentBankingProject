package com.sopra.banking.digital.agentbanking.web.exception;

/**
 * for HTTP 400 errors
 */
public final class DataFormatException extends RuntimeException {
	public DataFormatException() {
		super();
	}

	public DataFormatException(String message) {
		super(message);
	}

	public DataFormatException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataFormatException(Throwable cause) {
		super(cause);
	}
}