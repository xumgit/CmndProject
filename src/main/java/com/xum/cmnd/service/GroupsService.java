package com.xum.cmnd.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.xum.cmnd.dao.GroupsMapper;
import com.xum.cmnd.pojo.Groups;

@Service(value = "groupsService")
public class GroupsService {
	
	private static final Logger LOG = LogManager.getLogger(GroupsService.class);
	
	@Resource
	private GroupsMapper groupsMapper;

	public int deleteByPrimaryKey(Integer id) {
		int affectRow = -1;
		affectRow = this.groupsMapper.deleteByPrimaryKey(id);
		return affectRow;
	}
		
	public int insert(Groups record) {
		int affectRow = -1;
		affectRow = this.groupsMapper.insert(record);
		return affectRow;
	}
	
	public int insertSelective(Groups record) {
		int affectRow = -1;
		affectRow = this.groupsMapper.insertSelective(record);
		return affectRow;
	}
	
	public int selectAllCount() {
		int allcount = 0;
		allcount = this.groupsMapper.selectAllCount();
		return allcount;
	}

	public Groups selectByPrimaryKey(Integer id) {
		Groups groups = null;
		groups = this.groupsMapper.selectByPrimaryKey(id);
		return groups;
	}
	
	public int updateByPrimaryKeySelective(Groups record) {
		int affectRow = -1;
		affectRow = this.groupsMapper.updateByPrimaryKeySelective(record);
		return affectRow;
	}
	
	public int updateByPrimaryKeyWithBLOBs(Groups record) {
		int affectRow = -1;
		affectRow = this.groupsMapper.updateByPrimaryKeyWithBLOBs(record);
		return affectRow;
	}
	
	public int updateByPrimaryKey(Groups record) {
		int affectRow = -1;
		affectRow = this.groupsMapper.updateByPrimaryKey(record);
		return affectRow;
	}
			
	public List<Map<String, Object>> selectGroupsWithBootGrid(Map<String, Object> mapPara) {
		List<Map<String, Object>> devices = null;
		devices = this.groupsMapper.selectGroupsWithBootGrid(mapPara);
		return devices;
	}
	
}
