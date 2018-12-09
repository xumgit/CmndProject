package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.PlayoutInfo;

public interface PlayoutInfoMapper {
    int deleteByPrimaryKey(Integer playoutid);

    int insert(PlayoutInfo record);

    int insertSelective(PlayoutInfo record);

    PlayoutInfo selectByPrimaryKey(Integer playoutid);

    int updateByPrimaryKeySelective(PlayoutInfo record);

    int updateByPrimaryKey(PlayoutInfo record);
}