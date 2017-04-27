package com.sopra.banking.digital.agentbanking.service.mapper;

import com.sopra.banking.digital.agentbanking.data.entity.AgentEntity;
import com.sopra.banking.digital.agentbanking.service.dto.Agent;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2017-04-25T16:11:33+0100",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_121 (Oracle Corporation)"
)
public class AgentMapperImpl implements AgentMapper {

    @Override
    public List<Agent> toAgentDTOs(List<AgentEntity> agents) {
        if ( agents == null ) {
            return null;
        }

        List<Agent> list = new ArrayList<Agent>();
        for ( AgentEntity agentEntity : agents ) {
            list.add( toDto( agentEntity ) );
        }

        return list;
    }

    @Override
    public Agent toDto(AgentEntity entity) {
        if ( entity == null ) {
            return null;
        }

        Agent agent_ = new Agent();

        agent_.setId( entity.getId() );
        agent_.setLastDownload( entity.getLastDownload() );
        agent_.setLastLogin( entity.getLastLogin() );
        agent_.setLastUpload( entity.getLastUpload() );
        agent_.setPassword( entity.getPassword() );
        agent_.setStatus( entity.isStatus() );
        agent_.setUsername( entity.getUsername() );

        return agent_;
    }

    @Override
    public AgentEntity toEntity(Agent agent) {
        if ( agent == null ) {
            return null;
        }

        AgentEntity agentEntity = new AgentEntity();

        agentEntity.setId( agent.getId() );
        agentEntity.setLastDownload( agent.getLastDownload() );
        agentEntity.setLastLogin( agent.getLastLogin() );
        agentEntity.setLastUpload( agent.getLastUpload() );
        agentEntity.setPassword( agent.getPassword() );
        agentEntity.setStatus( agent.isStatus() );
        agentEntity.setUsername( agent.getUsername() );

        return agentEntity;
    }
}
