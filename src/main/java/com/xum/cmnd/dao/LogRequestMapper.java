package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.LogRequest;
import com.xum.cmnd.pojo.LogRequestWithBLOBs;

public interface LogRequestMapper {
    int deleteByPrimaryKey(String id);

    int insert(LogRequestWithBLOBs record);

    int insertSelective(LogRequestWithBLOBs record);

    LogRequestWithBLOBs selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(LogRequestWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(LogRequestWithBLOBs record);

    int updateByPrimaryKey(LogRequest record);
}