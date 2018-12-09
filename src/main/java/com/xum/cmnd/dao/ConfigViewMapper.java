package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.ConfigView;

public interface ConfigViewMapper {
    int insert(ConfigView record);

    int insertSelective(ConfigView record);
}