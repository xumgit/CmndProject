package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.RfPlayedoutSetting;

public interface RfPlayedoutSettingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(RfPlayedoutSetting record);

    int insertSelective(RfPlayedoutSetting record);

    RfPlayedoutSetting selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RfPlayedoutSetting record);

    int updateByPrimaryKeyWithBLOBs(RfPlayedoutSetting record);

    int updateByPrimaryKey(RfPlayedoutSetting record);
}