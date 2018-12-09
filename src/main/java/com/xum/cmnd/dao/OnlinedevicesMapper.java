package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Onlinedevices;

public interface OnlinedevicesMapper {
    int deleteByPrimaryKey(String id);

    int insert(Onlinedevices record);

    int insertSelective(Onlinedevices record);

    Onlinedevices selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Onlinedevices record);

    int updateByPrimaryKeyWithBLOBs(Onlinedevices record);

    int updateByPrimaryKey(Onlinedevices record);
}