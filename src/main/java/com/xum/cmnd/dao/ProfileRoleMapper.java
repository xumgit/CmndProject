package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.ProfileRoleKey;

public interface ProfileRoleMapper {
    int deleteByPrimaryKey(ProfileRoleKey key);

    int insert(ProfileRoleKey record);

    int insertSelective(ProfileRoleKey record);
}