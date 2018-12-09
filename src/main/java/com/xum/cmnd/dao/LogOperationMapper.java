package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.LogOperation;

public interface LogOperationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(LogOperation record);

    int insertSelective(LogOperation record);

    LogOperation selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(LogOperation record);

    int updateByPrimaryKeyWithBLOBs(LogOperation record);

    int updateByPrimaryKey(LogOperation record);
}