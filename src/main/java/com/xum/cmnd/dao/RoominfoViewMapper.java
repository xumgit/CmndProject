package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.RoominfoView;

public interface RoominfoViewMapper {
    int insert(RoominfoView record);

    int insertSelective(RoominfoView record);
}