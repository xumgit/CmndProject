package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.SmartinfoSetting;

public interface SmartinfoSettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SmartinfoSetting record);

    int insertSelective(SmartinfoSetting record);

    SmartinfoSetting selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SmartinfoSetting record);

    int updateByPrimaryKey(SmartinfoSetting record);
}