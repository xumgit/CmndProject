package com.xum.cmnd.dao;

import java.util.List;
import java.util.Map;

import com.xum.cmnd.pojo.Setting;
import com.xum.cmnd.pojo.SettingWithBLOBs;

public interface SettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SettingWithBLOBs record);

    int insertSelective(SettingWithBLOBs record);
    
    int selectAllCount();

    SettingWithBLOBs selectByPrimaryKey(Integer id);
    
    List<Map<String, Object>> selectSettingWithBootGrid(Map<String, Object> mapPara);

    int updateByPrimaryKeySelective(SettingWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SettingWithBLOBs record);

    int updateByPrimaryKey(Setting record);
}