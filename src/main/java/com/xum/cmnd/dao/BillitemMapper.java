package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Billitem;

public interface BillitemMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Billitem record);

    int insertSelective(Billitem record);

    Billitem selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Billitem record);

    int updateByPrimaryKey(Billitem record);
}