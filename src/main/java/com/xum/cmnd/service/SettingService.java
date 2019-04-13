package com.xum.cmnd.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xum.cmnd.dao.SettingMapper;

import com.xum.cmnd.pojo.SettingWithBLOBs;

@Service(value = "settingService")
public class SettingService {

	private static final Logger LOG = LogManager.getLogger(SettingService.class);
	
	@Resource
	private SettingMapper settingMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		int affectRow = -1;
		affectRow = this.settingMapper.deleteByPrimaryKey(id);
		return affectRow;
	}
		
	public int insert(SettingWithBLOBs record) {
		int affectRow = -1;
		affectRow = this.settingMapper.insert(record);
		return affectRow;
	}
	
	public int insertSelective(SettingWithBLOBs record) {
		int affectRow = -1;
		affectRow = this.settingMapper.insertSelective(record);
		return affectRow;
	}
	
	public int selectAllCount() {
		int allcount = 0;
		allcount = this.settingMapper.selectAllCount();
		return allcount;
	}
	
	public void settingTableChange() {
		this.settingMapper.settingTableChange();
	}
	
	public void getSettingCountByPlatform(Map<String, Object> mapPara) {
		this.settingMapper.getSettingCountByPlatform(mapPara);
	}
	
	public void getSettingCountByPlatformAnother(Map<String, Object> mapPara) {
		this.settingMapper.getSettingCountByPlatformAnother(mapPara);
	}
	
	public SettingWithBLOBs selectByPrimaryKey(Integer id) {
		SettingWithBLOBs settingWithBLOBs = null;
		settingWithBLOBs = this.settingMapper.selectByPrimaryKey(id);
		return settingWithBLOBs;
	}
	
	public int updateByPrimaryKeySelective(SettingWithBLOBs record) {
		int affectRow = -1;
		affectRow = this.settingMapper.updateByPrimaryKeySelective(record);
		return affectRow;
	}
	
	public int updateByPrimaryKeyWithBLOBs(SettingWithBLOBs record) {
		int affectRow = -1;
		affectRow = this.settingMapper.updateByPrimaryKeyWithBLOBs(record);
		return affectRow;
	}
	
	public int updateByPrimaryKey(SettingWithBLOBs record) {
		int affectRow = -1;
		affectRow = this.settingMapper.updateByPrimaryKey(record);
		return affectRow;
	}
	
	public List<Map<String, Object>> selectSettingWithBootGrid(Map<String, Object> mapPara) {
		List<Map<String, Object>> setting = null;
		setting = this.settingMapper.selectSettingWithBootGrid(mapPara);
		return setting;
	}
	
}
