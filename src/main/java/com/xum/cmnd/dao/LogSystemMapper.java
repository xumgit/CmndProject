package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.LogSystem;

public interface LogSystemMapper {
    int deleteByPrimaryKey(Integer logid);

    int insert(LogSystem record);

    int insertSelective(LogSystem record);

    LogSystem selectByPrimaryKey(Integer logid);

    int updateByPrimaryKeySelective(LogSystem record);

    int updateByPrimaryKeyWithBLOBs(LogSystem record);

    int updateByPrimaryKey(LogSystem record);
}