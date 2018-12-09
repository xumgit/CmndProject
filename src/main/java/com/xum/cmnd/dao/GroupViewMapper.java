package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.GroupViewWithBLOBs;

public interface GroupViewMapper {
    int insert(GroupViewWithBLOBs record);

    int insertSelective(GroupViewWithBLOBs record);
}