package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Setting;
import com.xum.cmnd.pojo.SettingWithBLOBs;

public interface SettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SettingWithBLOBs record);

    int insertSelective(SettingWithBLOBs record);

    SettingWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SettingWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SettingWithBLOBs record);

    int updateByPrimaryKey(Setting record);
}