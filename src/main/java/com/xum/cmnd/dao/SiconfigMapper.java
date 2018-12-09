package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Siconfig;

public interface SiconfigMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Siconfig record);

    int insertSelective(Siconfig record);

    Siconfig selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Siconfig record);

    int updateByPrimaryKey(Siconfig record);
}