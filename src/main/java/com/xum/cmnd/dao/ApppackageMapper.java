package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Apppackage;
import com.xum.cmnd.pojo.ApppackageWithBLOBs;

public interface ApppackageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ApppackageWithBLOBs record);

    int insertSelective(ApppackageWithBLOBs record);

    ApppackageWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ApppackageWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(ApppackageWithBLOBs record);

    int updateByPrimaryKey(Apppackage record);
}