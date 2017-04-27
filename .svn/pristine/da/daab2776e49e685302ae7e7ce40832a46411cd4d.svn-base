package com.sopra.banking.digital.agentbanking.data.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import org.hibernate.annotations.GenericGenerator;

@MappedSuperclass
public abstract class AbstractEntity implements Serializable {

	private static final long serialVersionUID = 0;

	protected String id;
	protected Date timestamp;

	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "OID", nullable = false, updatable = false, length = 36)
	@Id
	public String getId() {
		return id;
	}

	@Version
	public Date getTimestamp() {
		return timestamp;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
}