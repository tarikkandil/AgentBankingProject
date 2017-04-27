package com.sopra.banking.digital.agentbanking.service.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;
import com.sopra.banking.digital.agentbanking.service.dto.Agent;

@Mapper
public interface AgentMapper {

	AgentMapper INSTANCE = Mappers.getMapper(AgentMapper.class);

	List<Agent> toAgentDTOs(List<AgentEntity> agents);

	Agent toDto(AgentEntity entity);

	AgentEntity toEntity(Agent agent);

}
