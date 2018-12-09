package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Profile;
import com.xum.cmnd.pojo.ProfileWithBLOBs;

public interface ProfileMapper {
    int deleteByPrimaryKey(String id);

    int insert(ProfileWithBLOBs record);

    int insertSelective(ProfileWithBLOBs record);

    ProfileWithBLOBs selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(ProfileWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(ProfileWithBLOBs record);

    int updateByPrimaryKey(Profile record);
}