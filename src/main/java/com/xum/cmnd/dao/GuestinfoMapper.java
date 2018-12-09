package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Guestinfo;

public interface GuestinfoMapper {
    int deleteByPrimaryKey(Integer guestid);

    int insert(Guestinfo record);

    int insertSelective(Guestinfo record);

    Guestinfo selectByPrimaryKey(Integer guestid);

    int updateByPrimaryKeySelective(Guestinfo record);

    int updateByPrimaryKey(Guestinfo record);
}