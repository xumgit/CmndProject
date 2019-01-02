package com.xum.cmnd.dao;

import java.util.List;
import java.util.Map;

import com.xum.cmnd.pojo.Groups;

public interface GroupsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Groups record);

    int insertSelective(Groups record);

    int selectAllCount();

    Groups selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Groups record);

    int updateByPrimaryKeyWithBLOBs(Groups record);

    int updateByPrimaryKey(Groups record);

    List<Map<String, Object>> selectGroupsWithBootGrid(Map<String, Object> mapPara);
}