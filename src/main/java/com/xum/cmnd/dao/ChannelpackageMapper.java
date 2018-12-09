package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Channelpackage;
import com.xum.cmnd.pojo.ChannelpackageWithBLOBs;

public interface ChannelpackageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ChannelpackageWithBLOBs record);

    int insertSelective(ChannelpackageWithBLOBs record);

    ChannelpackageWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ChannelpackageWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(ChannelpackageWithBLOBs record);

    int updateByPrimaryKey(Channelpackage record);
}