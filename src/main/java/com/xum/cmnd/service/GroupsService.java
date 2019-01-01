package com.xum.cmnd.service;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.xum.cmnd.dao.GroupsMapper;

@Service(value = "groupsService")
public class GroupsService {
	
	private static final Logger LOG = LogManager.getLogger(GroupsService.class);
	
	@Resource
	private GroupsMapper groupsMapper;
	
}
