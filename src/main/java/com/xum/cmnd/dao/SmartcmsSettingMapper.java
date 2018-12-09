package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.SmartcmsSetting;

public interface SmartcmsSettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SmartcmsSetting record);

    int insertSelective(SmartcmsSetting record);

    SmartcmsSetting selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SmartcmsSetting record);

    int updateByPrimaryKey(SmartcmsSetting record);
}