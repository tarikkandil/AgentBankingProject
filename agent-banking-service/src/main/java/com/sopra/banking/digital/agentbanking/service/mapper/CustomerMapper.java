package com.sopra.banking.digital.agentbanking.service.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.sopra.banking.digital.agentbanking.data.entity.AddressEntity;
import com.sopra.banking.digital.agentbanking.data.entity.CustomerEntity;
import com.sopra.banking.digital.agentbanking.service.dto.Address;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;

@Mapper
public interface CustomerMapper {

	CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);

	Address toAddressDto(AddressEntity entity);

	AddressEntity toAddressEntity(Address address);

	Customer toCustomerDto(CustomerEntity entity, AddressEntity address);

	List<Customer> toCustomerDTOs(List<CustomerEntity> customers);

	Customer toDto(CustomerEntity entity);

	CustomerEntity toEntity(Customer customer);

}
