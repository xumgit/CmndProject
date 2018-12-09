package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Smartui;

public interface SmartuiMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Smartui record);

    int insertSelective(Smartui record);

    Smartui selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Smartui record);

    int updateByPrimaryKeyWithBLOBs(Smartui record);

    int updateByPrimaryKey(Smartui record);
}