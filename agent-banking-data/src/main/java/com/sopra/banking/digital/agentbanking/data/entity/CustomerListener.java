package com.sopra.banking.digital.agentbanking.data.entity;

import javax.persistence.PrePersist;

public class CustomerListener {
	@PrePersist
	public void userPrePersist(CustomerEntity ob) {
		int aNumber = 0;
		aNumber = (int) ((Math.random() * 900000000) + 1000000000);
		ob.setRecordId(aNumber);
	}
}
