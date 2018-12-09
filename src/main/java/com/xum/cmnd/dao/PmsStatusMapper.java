package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.PmsStatus;

public interface PmsStatusMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PmsStatus record);

    int insertSelective(PmsStatus record);

    PmsStatus selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PmsStatus record);

    int updateByPrimaryKey(PmsStatus record);
}