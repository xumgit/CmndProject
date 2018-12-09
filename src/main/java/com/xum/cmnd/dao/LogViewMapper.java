package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.LogView;

public interface LogViewMapper {
    int insert(LogView record);

    int insertSelective(LogView record);
}