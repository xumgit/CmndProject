package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Role;

public interface RoleMapper {
    int deleteByPrimaryKey(Integer idrole);

    int insert(Role record);

    int insertSelective(Role record);

    Role selectByPrimaryKey(Integer idrole);

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);
}