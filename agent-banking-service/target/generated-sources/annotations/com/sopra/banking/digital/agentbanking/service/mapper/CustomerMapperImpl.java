package com.sopra.banking.digital.agentbanking.service.mapper;

import com.sopra.banking.digital.agentbanking.data.entity.AddressEntity;
import com.sopra.banking.digital.agentbanking.data.entity.CustomerEntity;
import com.sopra.banking.digital.agentbanking.service.dto.Address;
import com.sopra.banking.digital.agentbanking.service.dto.City;
import com.sopra.banking.digital.agentbanking.service.dto.Country;
import com.sopra.banking.digital.agentbanking.service.dto.Customer;
import com.sopra.banking.digital.agentbanking.service.dto.DocType;
import com.sopra.banking.digital.agentbanking.service.dto.Gender;
import com.sopra.banking.digital.agentbanking.service.dto.Language;
import com.sopra.banking.digital.agentbanking.service.dto.PhoneType;
import com.sopra.banking.digital.agentbanking.service.dto.Title;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-04-25T16:11:33+0100",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_121 (Oracle Corporation)"
)
public class CustomerMapperImpl implements CustomerMapper {

    @Override
    public Address toAddressDto(AddressEntity entity) {
        if ( entity == null ) {
            return null;
        }

        Address address = new Address();

        address.setCountry( entity.getCountry() );
        address.setPdboxNo( entity.getPdboxNo() );
        address.setStreet( entity.getStreet() );
        address.setTown( entity.getTown() );

        return address;
    }

    @Override
    public AddressEntity toAddressEntity(Address address) {
        if ( address == null ) {
            return null;
        }

        AddressEntity addressEntity = new AddressEntity();

        addressEntity.setCountry( address.getCountry() );
        addressEntity.setPdboxNo( address.getPdboxNo() );
        addressEntity.setStreet( address.getStreet() );
        addressEntity.setTown( address.getTown() );

        return addressEntity;
    }

    @Override
    public Customer toCustomerDto(CustomerEntity entity, AddressEntity address) {
        if ( entity == null && address == null ) {
            return null;
        }

        Customer customer = new Customer();

        if ( entity != null ) {
            customer.setAddress( toAddressDto( entity.getAddress() ) );
            if ( entity.getCityOfBirth() != null ) {
                customer.setCityOfBirth( Enum.valueOf( City.class, entity.getCityOfBirth() ) );
            }
            if ( entity.getCountryOfBirth() != null ) {
                customer.setCountryOfBirth( Enum.valueOf( Country.class, entity.getCountryOfBirth() ) );
            }
            customer.setDateOfBirth( entity.getDateOfBirth() );
            customer.setFirstName( entity.getFirstName() );
            if ( entity.getGender() != null ) {
                customer.setGender( Enum.valueOf( Gender.class, entity.getGender() ) );
            }
            customer.setId( entity.getId() );
            customer.setIdentityDocId( entity.getIdentityDocId() );
            if ( entity.getIdentityDocType() != null ) {
                customer.setIdentityDocType( Enum.valueOf( DocType.class, entity.getIdentityDocType() ) );
            }
            if ( entity.getLanguage() != null ) {
                customer.setLanguage( Enum.valueOf( Language.class, entity.getLanguage() ) );
            }
            customer.setLastName( entity.getLastName() );
            if ( entity.getNationality() != null ) {
                customer.setNationality( Enum.valueOf( Country.class, entity.getNationality() ) );
            }
            customer.setPhoneNumber( entity.getPhoneNumber() );
            if ( entity.getPhoneType() != null ) {
                customer.setPhoneType( Enum.valueOf( PhoneType.class, entity.getPhoneType() ) );
            }
            customer.setRecordId( entity.getRecordId() );
            if ( entity.getResidence() != null ) {
                customer.setResidence( Enum.valueOf( Country.class, entity.getResidence() ) );
            }
            if ( entity.getTitle() != null ) {
                customer.setTitle( Enum.valueOf( Title.class, entity.getTitle() ) );
            }
        }

        return customer;
    }

    @Override
    public List<Customer> toCustomerDTOs(List<CustomerEntity> customers) {
        if ( customers == null ) {
            return null;
        }

        List<Customer> list = new ArrayList<Customer>();
        for ( CustomerEntity customerEntity : customers ) {
            list.add( toDto( customerEntity ) );
        }

        return list;
    }

    @Override
    public Customer toDto(CustomerEntity entity) {
        if ( entity == null ) {
            return null;
        }

        Customer customer_ = new Customer();

        customer_.setAddress( toAddressDto( entity.getAddress() ) );
        if ( entity.getCityOfBirth() != null ) {
            customer_.setCityOfBirth( Enum.valueOf( City.class, entity.getCityOfBirth() ) );
        }
        if ( entity.getCountryOfBirth() != null ) {
            customer_.setCountryOfBirth( Enum.valueOf( Country.class, entity.getCountryOfBirth() ) );
        }
        customer_.setDateOfBirth( entity.getDateOfBirth() );
        customer_.setFirstName( entity.getFirstName() );
        if ( entity.getGender() != null ) {
            customer_.setGender( Enum.valueOf( Gender.class, entity.getGender() ) );
        }
        customer_.setId( entity.getId() );
        customer_.setIdentityDocId( entity.getIdentityDocId() );
        if ( entity.getIdentityDocType() != null ) {
            customer_.setIdentityDocType( Enum.valueOf( DocType.class, entity.getIdentityDocType() ) );
        }
        if ( entity.getLanguage() != null ) {
            customer_.setLanguage( Enum.valueOf( Language.class, entity.getLanguage() ) );
        }
        customer_.setLastName( entity.getLastName() );
        if ( entity.getNationality() != null ) {
            customer_.setNationality( Enum.valueOf( Country.class, entity.getNationality() ) );
        }
        customer_.setPhoneNumber( entity.getPhoneNumber() );
        if ( entity.getPhoneType() != null ) {
            customer_.setPhoneType( Enum.valueOf( PhoneType.class, entity.getPhoneType() ) );
        }
        customer_.setRecordId( entity.getRecordId() );
        if ( entity.getResidence() != null ) {
            customer_.setResidence( Enum.valueOf( Country.class, entity.getResidence() ) );
        }
        if ( entity.getTitle() != null ) {
            customer_.setTitle( Enum.valueOf( Title.class, entity.getTitle() ) );
        }

        return customer_;
    }

    @Override
    public CustomerEntity toEntity(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerEntity customerEntity = new CustomerEntity();

        customerEntity.setId( customer.getId() );
        customerEntity.setAddress( toAddressEntity( customer.getAddress() ) );
        if ( customer.getCityOfBirth() != null ) {
            customerEntity.setCityOfBirth( customer.getCityOfBirth().name() );
        }
        if ( customer.getCountryOfBirth() != null ) {
            customerEntity.setCountryOfBirth( customer.getCountryOfBirth().name() );
        }
        customerEntity.setDateOfBirth( customer.getDateOfBirth() );
        customerEntity.setFirstName( customer.getFirstName() );
        if ( customer.getGender() != null ) {
            customerEntity.setGender( customer.getGender().name() );
        }
        customerEntity.setIdentityDocId( customer.getIdentityDocId() );
        if ( customer.getIdentityDocType() != null ) {
            customerEntity.setIdentityDocType( customer.getIdentityDocType().name() );
        }
        if ( customer.getLanguage() != null ) {
            customerEntity.setLanguage( customer.getLanguage().name() );
        }
        customerEntity.setLastName( customer.getLastName() );
        if ( customer.getNationality() != null ) {
            customerEntity.setNationality( customer.getNationality().name() );
        }
        customerEntity.setPhoneNumber( customer.getPhoneNumber() );
        if ( customer.getPhoneType() != null ) {
            customerEntity.setPhoneType( customer.getPhoneType().name() );
        }
        customerEntity.setRecordId( customer.getRecordId() );
        if ( customer.getResidence() != null ) {
            customerEntity.setResidence( customer.getResidence().name() );
        }
        if ( customer.getTitle() != null ) {
            customerEntity.setTitle( customer.getTitle().name() );
        }

        return customerEntity;
    }
}
