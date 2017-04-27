package com.sopra.banking.digital.agentbanking.service.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class Agent {

	private String id;
	private String username;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	private Date lastDownload;
	private Date lastUpload;
	private Date lastLogin;
	private boolean status;

	public Agent() {
		super();
	}

	public Agent(String id, String username, String password, Date lastDownload, Date lastUpload, Date lastLogin,
			boolean status) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.lastDownload = lastDownload;
		this.lastUpload = lastUpload;
		this.lastLogin = lastLogin;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public Date getLastDownload() {
		return lastDownload;
	}

	public Date getLastLogin() {
		return lastLogin;
	}

	public Date getLastUpload() {
		return lastUpload;
	}

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}

	public boolean isStatus() {
		return status;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setLastDownload(Date lastDownload) {
		this.lastDownload = lastDownload;
	}

	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}

	public void setLastUpload(Date lastUpload) {
		this.lastUpload = lastUpload;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
