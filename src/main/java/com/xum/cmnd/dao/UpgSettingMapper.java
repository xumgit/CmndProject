package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.UpgSetting;

public interface UpgSettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UpgSetting record);

    int insertSelective(UpgSetting record);

    UpgSetting selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UpgSetting record);

    int updateByPrimaryKeyWithBLOBs(UpgSetting record);

    int updateByPrimaryKey(UpgSetting record);
}